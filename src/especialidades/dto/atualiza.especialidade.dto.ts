import { IsNotEmpty, IsOptional } from "class-validator";

export class AtualizaEspecialidadeDto {
    @IsOptional()
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string
}
