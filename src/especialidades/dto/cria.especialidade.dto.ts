import { IsNotEmpty, IsString } from "class-validator";

export class CriaEspecialidadeDto {
    @IsString({ message: 'O nome não é uma string' })
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string
}