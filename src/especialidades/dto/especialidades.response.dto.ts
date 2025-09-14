import { IsNotEmpty } from "class-validator";

export class EspecialidadesResponseDto{
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;
}
