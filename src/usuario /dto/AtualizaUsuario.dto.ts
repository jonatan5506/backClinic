import { IsBoolean, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class AtualizaUsuarioDTO {
  @IsOptional()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;
  
  @IsOptional()
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  company: string;
  
  @IsOptional()
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  role: string;
  
  @IsOptional()
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  status: string;
  
  @IsOptional()
  @IsBoolean()
  verified: boolean;

}
