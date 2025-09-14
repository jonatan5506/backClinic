import { TipoUsuarioEnum } from "./enums/tipo.usuario.enum";
export declare class UsuarioEntity {
    id: string;
    name: string;
    tipoUsuario: TipoUsuarioEnum;
    company: string;
    role: string;
    verified: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
