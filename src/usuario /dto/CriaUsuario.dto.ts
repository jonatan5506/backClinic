import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { TipoUsuarioEnum } from '../enums/tipo.usuario.enum';
//import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsEnum(TipoUsuarioEnum, { message: 'Categoria inválida' })
  tipoUsuario: TipoUsuarioEnum;

  @MinLength(1, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  company: string;

  @MinLength(1, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  role: string;

  @MinLength(1, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  status: string;

  @IsBoolean()
  verified: boolean;

  /* @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
 @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
 email: string; */
}
