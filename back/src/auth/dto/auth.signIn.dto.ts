import { IsEmail, IsString, MaxLength } from 'class-validator';

export class AuthSignInDto {
  @IsEmail()
  @MaxLength(100, { message: 'O email deve ter no máximo 100 caracteres' })
  email: string;

  @IsString()
  @MaxLength(50)
  password: string;
}
