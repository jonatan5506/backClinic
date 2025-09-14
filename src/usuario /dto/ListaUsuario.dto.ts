import { TipoUsuarioEnum } from "../enums/tipo.usuario.enum";

export class ListaUsuarioDTO {
  constructor(
    readonly id: string, 
    readonly name: string, 
    readonly company: string, 
    readonly role: string, 
    readonly status: string, 
    readonly verified: boolean, 
    readonly tipoUsuario: TipoUsuarioEnum) { }
}
