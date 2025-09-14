import { Repository } from 'typeorm';
import { MedicoEntity } from '../medico/medico.entity';
import { MedicoEspecialidadesEntity } from '../especialidades/especilidades.medico.entity';
export declare class MedicoSeeder {
    private readonly medicoRepository;
    private readonly especialidadeRepository;
    constructor(medicoRepository: Repository<MedicoEntity>, especialidadeRepository: Repository<MedicoEspecialidadesEntity>);
    run(): Promise<void>;
}
