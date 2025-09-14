import { Repository } from 'typeorm';
import { MedicoEspecialidadesEntity } from 'src/especialidades/especilidades.medico.entity';
export declare class MedicoEspecialidadeSeed {
    private readonly especialidadeRepository;
    constructor(especialidadeRepository: Repository<MedicoEspecialidadesEntity>);
    run(): Promise<void>;
}
