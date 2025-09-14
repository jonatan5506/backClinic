import { MedicoEspecialidadesRepository } from "./especialidades.medico.repository";
import { MedicoEspecialidadesEntity } from "./medico.especilidades.entity";
import { EspecialidadesResponseDto } from "./dto/especialidades.response.dto";
export declare class MedicosEspecialidadesService {
    private readonly especialidadesRepository;
    constructor(especialidadesRepository: MedicoEspecialidadesRepository);
    criaEspecialidade(dadosEspecialidades: MedicoEspecialidadesEntity): Promise<MedicoEspecialidadesEntity>;
    listaEspecialidades(): Promise<EspecialidadesResponseDto[]>;
}
