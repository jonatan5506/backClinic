import {
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MaxLength(100, { message: 'O Nome deve ter no máximo 100 caracteres' })
  nome: string;

  @IsString()
  @MaxLength(100, { message: 'O email deve ter no máximo 100 caracteres' })
  email: string;

  // A Expressão Regular (Regex) para o número e o especial
  @Matches(/^(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).{6,}$/, {
    message:
      'A senha deve conter pelo menos um número e um caractere especial.',
  })
  senha: string;
}
