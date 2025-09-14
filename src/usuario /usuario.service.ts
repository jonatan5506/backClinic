import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';

import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepositoryOld: Repository<UsuarioEntity>,
    private readonly usuarioRepository: UsuarioRepository
  ) { }


  async criaUsuario(dados: CriaUsuarioDTO): Promise<ListaUsuarioDTO> {
    const usuario = new UsuarioEntity();

    usuario.id = uuid();
    usuario.company = dados.company;
    usuario.role = dados.role;
    usuario.status = dados.status;
    usuario.verified = dados.verified;
    usuario.name = dados.name;
    usuario.tipoUsuario = dados.tipoUsuario;

    return await this.usuarioRepository.salva(usuario);
  }

  //TODO alterar para db
  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepositoryOld.find();
    
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(
        usuario.id,
        usuario.name,
        usuario.company,
        usuario.role,
        usuario.status,
        usuario.verified,
        usuario.tipoUsuario
      )
    )
    return usuariosLista;
  }

  async atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO) {
    this.usuarioRepositoryOld.update(id, novosDados);
  }

  async deletaUsuario(id: string) {
    this.usuarioRepositoryOld.delete(id);
  }
}

/* import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async criaUsuario(dados: CriaUsuarioDTO): Promise<UsuarioEntity> {
    const usuario = new UsuarioEntity();

    usuario.id = uuid();
    usuario.company = dados.company;
    usuario.role = dados.role;
    usuario.status = dados.status;
    usuario.verified = dados.verified;
    usuario.name = dados.name;
    usuario.tipoUsuario = dados.tipoUsuario;

    return await this.usuarioRepository.salva(usuario);
  } */

/*             @InjectRepository(UsuarioEntity)
        private readonly usuarioRepositoryOld: Repository<UsuarioEntity>, */