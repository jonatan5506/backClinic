import { EspecialidadesResponseDto } from "./dto/especialidades.response.dto";
import { MedicosEspecialidadesService } from "./especialidades.medico.service";
import { CriaEspecialidadeDto } from "./dto/cria.especialidade.dto";
import { AtualizaEspecialidadeDto } from "./dto/atualiza.especialidade.dto";
export declare class MedicoEspecialidadesController {
    private readonly especialidadesService;
    constructor(especialidadesService: MedicosEspecialidadesService);
    criaEspecialidades(dadosEspecialidade: CriaEspecialidadeDto): Promise<EspecialidadesResponseDto>;
    listaEspecialidades(): Promise<EspecialidadesResponseDto[]>;
    atualizaEspecialidade(id: string, novosDados: AtualizaEspecialidadeDto): Promise<void>;
    deletaEspecialidade(id: string): Promise<void>;
}
