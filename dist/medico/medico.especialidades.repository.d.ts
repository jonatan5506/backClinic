import { Repository } from 'typeorm';
import { MedicoEspecialidadesEntity } from './medico.especilidades.entity';
export declare class MedicoEspecialidadesRepository {
    private readonly ormRepo;
    constructor(ormRepo: Repository<MedicoEspecialidadesEntity>);
    buscaPorNomes(nomes: string[]): Promise<MedicoEspecialidadesEntity[]>;
}
