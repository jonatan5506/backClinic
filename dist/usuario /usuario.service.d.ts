import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
export declare class UsuarioService {
    private readonly usuarioRepositoryOld;
    private readonly usuarioRepository;
    constructor(usuarioRepositoryOld: Repository<UsuarioEntity>, usuarioRepository: UsuarioRepository);
    criaUsuario(dados: CriaUsuarioDTO): Promise<ListaUsuarioDTO>;
    listaUsuarios(): Promise<ListaUsuarioDTO[]>;
    atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO): Promise<void>;
    deletaUsuario(id: string): Promise<void>;
}
