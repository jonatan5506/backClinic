import { Repository } from 'typeorm';
import { MedicoEspecialidadesEntity } from './medico.especilidades.entity';
import { EspecialidadesResponseDto } from './dto/especialidades.response.dto';
export declare class MedicoEspecialidadesRepository {
    private readonly ormRepo;
    constructor(ormRepo: Repository<MedicoEspecialidadesEntity>);
    criaEspecialidade(dadosEspecialidade: MedicoEspecialidadesEntity): Promise<MedicoEspecialidadesEntity>;
    listaEspecialidades(): Promise<EspecialidadesResponseDto[]>;
    buscaPorNomes(nomes: string[]): Promise<MedicoEspecialidadesEntity[]>;
}
