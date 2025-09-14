import { MedicoEspecialidadesRepository } from "./especialidades.medico.repository";
import { MedicoEspecialidadesEntity } from "./especilidades.medico.entity";
import { EspecialidadesResponseDto } from "./dto/especialidades.response.dto";
import { AtualizaEspecialidadeDto } from "./dto/atualiza.especialidade.dto";
import { CriaEspecialidadeDto } from "./dto/cria.especialidade.dto";
export declare class MedicosEspecialidadesService {
    private readonly especialidadesRepository;
    constructor(especialidadesRepository: MedicoEspecialidadesRepository);
    criaEspecialidade(dadosEspecialidades: CriaEspecialidadeDto): Promise<MedicoEspecialidadesEntity>;
    listaEspecialidades(): Promise<EspecialidadesResponseDto[]>;
    atualizaEspecialidade(id: string, dadosEspecialidades: AtualizaEspecialidadeDto): Promise<void>;
    deletaEspecialidade(id: string): Promise<{
        message: string;
    }>;
}
