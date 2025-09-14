import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioRepository {
    private readonly ormRepo;
    constructor(ormRepo: Repository<UsuarioEntity>);
    private usuarios;
    salva(usuario: UsuarioEntity): Promise<UsuarioEntity>;
    listar(): Promise<UsuarioEntity[]>;
    private buscaPorId;
    atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    remove(id: string): Promise<UsuarioEntity>;
}
