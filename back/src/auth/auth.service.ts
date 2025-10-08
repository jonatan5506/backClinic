import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

import { UsuarioService } from '../usuario/usuario.service';
import { AuthResponseDto } from './dto/auth.response.dto';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';

@Injectable()
export class AuthService {
  private readonly jwtExpirationInSeconds: number;

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationInSeconds =
      this.configService.get<number>('JWT_EXPIRATION_TIME') ?? 7200;
  }

  // ===== LOGIN =====
  async signIn(email: string, senha: string): Promise<AuthResponseDto> {
    const usuario = await this.findByEmail(email);

    if (!usuario || !compareSync(senha, usuario.senha)) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const payload = { sub: usuario.id, email: usuario.email };
    const token = this.jwtService.sign(payload);

    return {
      token,
      expiresIn: this.jwtExpirationInSeconds,
      //user: { id: usuario.id, username: usuario.nome },
    };
  }

  // ===== SIGNUP =====
  async signUp(createUsuarioDto: CreateUsuarioDto): Promise<AuthResponseDto> {
    const novoUsuario = await this.usuarioService.create(createUsuarioDto);

    const payload = { sub: novoUsuario.id, email: createUsuarioDto.email };
    const token = this.jwtService.sign(payload);

    return {
      token,
      expiresIn: this.jwtExpirationInSeconds,
      //user: { id: novoUsuario.id, username: novoUsuario.nome },
    };
  }

  // ===== FUNÇÃO AUXILIAR =====
  private async findByEmail(email: string): Promise<UsuarioEntity | null> {
    const usuarios = await this.usuarioService['usuarioRepository'].find({
      where: { email },
    });
    return usuarios.length ? usuarios[0] : null;
  }
}

/* import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync as bcrypCompareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

import { UsersService } from '../users/users.service';
import { AuthResponseDto } from './dto/auth.response.dto';

@Injectable()
export class AuthService {
  private readonly jwtExpirationInSeconds: number;

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationInSeconds = this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    )!;
  }

  async signIn(username: string, password: string): Promise<AuthResponseDto> {
    const foundUser = await this.usersService.findByUsername(username);
    if (!foundUser || !bcrypCompareSync(password, foundUser.password!)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: foundUser.id, username: foundUser.username };
    const token = this.jwtService.sign(payload);

    return {
      token,
      expiresIn: this.jwtExpirationInSeconds,
    };
  }
}
 */
