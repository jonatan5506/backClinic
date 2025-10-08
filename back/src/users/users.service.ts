import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hashSync as bcryptHashSync } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(newUser: CreateUserDto): Promise<Partial<CreateUserDto>> {
    const userAlreadyRegistered = await this.findByUsername(newUser.username);

    if (userAlreadyRegistered) {
      throw new ConflictException('Username already registered.');
    }

    const dbUser = new UserEntity();
    dbUser.username = newUser.username;
    dbUser.password = bcryptHashSync(newUser.password, 10);

    const { id, username } = await this.userRepository.save(dbUser);
    return { id, username };
  }

  async findAll() {
    const user = await this.userRepository.find();
    return user;
  }
  /* 
  findOne(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with id not found.`);
    }
    return user;
  }

  remove(id: string) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with id "${id}" not found.`);
    }
    const removedUser = this.users[index];
    this.users.splice(index, 1);
    return removedUser;
  } */

  async findByUsername(username: string): Promise<Partial<CreateUserDto>> {
    const possibleUser = await this.userRepository.findOne({
      where: { username },
    });

    if (!possibleUser) {
      throw new NotFoundException(`Username "${username}" not found.`);
    }

    return {
      id: possibleUser.id,
      username: possibleUser.username,
      password: possibleUser.password,
    };
  }
}
