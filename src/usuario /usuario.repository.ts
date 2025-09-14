import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly ormRepo: Repository<UsuarioEntity>,
  ) {}

  private usuarios: UsuarioEntity[] = [];

  async salva(usuario: UsuarioEntity) {
    return await this.ormRepo.save(usuario);
  }

  async listar() {
    return await this.ormRepo.find();
  }

  /* async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  } */

  private buscaPorId(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuário não existe');
    }

    return possivelUsuario;
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const usuario = this.buscaPorId(id);

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;
    });

    return usuario;
  }

  async remove(id: string) {
    const usuario = this.buscaPorId(id);
    this.usuarios = this.usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );
    return usuario;
  }
}
