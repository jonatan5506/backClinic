import { IsArray, IsNotEmpty, IsString, Length } from 'class-validator';


export class EspecialidadesDto {
    @IsString()
    @IsNotEmpty({ message: 'Nome da especialidade não pode ser vazio' })
    nomeEspecialidade: string;
}

export class CriaMedicoDTO {
    @IsString({ message: 'O nome deve ser uma string' })
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    nome: string;

    @IsString({ message: 'O CRM deve ser uma string' })
    @IsNotEmpty({ message: 'O CRM é obrigatório' })
    @Length(4, 20, { message: 'O CRM deve ter entre 4 e 20 caracteres' })
    crm: string;

    @IsString({ message: 'O CPF deve ser uma string' })
    @IsNotEmpty({ message: 'O CPF é obrigatório' })
    @Length(11, 11, { message: 'O CPF deve ter exatamente 11 dígitos' })
    cpf: string;

    /* @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EspecialidadesDto)
    especialidades: EspecialidadesDto[]; *///Front deve ter uma lista de Especialidades.
    @IsArray()
    @IsString({ each: true })
    especialidades: string[];
}

