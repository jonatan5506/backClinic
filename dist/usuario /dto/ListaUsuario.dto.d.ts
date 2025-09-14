import { TipoUsuarioEnum } from "../enums/tipo.usuario.enum";
export declare class ListaUsuarioDTO {
    readonly id: string;
    readonly name: string;
    readonly company: string;
    readonly role: string;
    readonly status: string;
    readonly verified: boolean;
    readonly tipoUsuario: TipoUsuarioEnum;
    constructor(id: string, name: string, company: string, role: string, status: string, verified: boolean, tipoUsuario: TipoUsuarioEnum);
}
