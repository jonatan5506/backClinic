import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { hashSync as bcryptHashSync } from 'bcrypt';

import { UsuarioEntity } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RespostaUsuarioDto } from './dto/resposta-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async create(novoUsuario: CreateUsuarioDto): Promise<RespostaUsuarioDto> {
    const usuarioRegritrado = await this.emailJaCadastrado(novoUsuario.email);

    if (usuarioRegritrado) {
      throw new ConflictException(
        `O email '${novoUsuario.email}' já está em uso.`,
      );
    }

    const dbUsuario = new UsuarioEntity();
    dbUsuario.email = novoUsuario.email;
    dbUsuario.nome = novoUsuario.nome;
    dbUsuario.senha = bcryptHashSync(novoUsuario.senha, 10);

    const { id, nome } = await this.usuarioRepository.save(dbUsuario);
    return { id, nome };
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

  async emailJaCadastrado(email: string): Promise<boolean> {
    const emailEncontrado = await this.usuarioRepository.findOne({
      where: { email },
    });

    // Se 'emailEncontrado' for diferente de null, retorna 'true'. Caso contrário, retorna 'false'.
    return !!emailEncontrado;
  }
}
