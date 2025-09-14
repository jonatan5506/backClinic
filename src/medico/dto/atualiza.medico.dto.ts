import { IsArray, IsOptional, IsString, Length } from "class-validator";

export class AtualizaMedicoDto {
    @IsOptional()
    @IsString({ message: 'O nome deve ser uma string' })
    nome: string;

    @IsOptional()
    @IsString({ message: 'O CRM deve ser uma string' })
    @Length(4, 20, { message: 'O CRM deve ter entre 4 e 20 caracteres' })
    crm: string;

    @IsOptional()
    @IsString({ message: 'O CPF deve ser uma string' })
    @Length(11, 11, { message: 'O CPF deve ter exatamente 11 dígitos' })
    cpf: string;

    @IsOptional()
    @IsArray({ message: 'Especialidades deve ser um array.' })
    @IsString({ each: true, message: 'Cada item em especialidades deve ser uma string.' })
    especialidades: string[];
}
