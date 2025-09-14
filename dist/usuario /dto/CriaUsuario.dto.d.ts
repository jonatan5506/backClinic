import { TipoUsuarioEnum } from '../enums/tipo.usuario.enum';
export declare class CriaUsuarioDTO {
    name: string;
    tipoUsuario: TipoUsuarioEnum;
    company: string;
    role: string;
    status: string;
    verified: boolean;
}
