import { EspecialidadesResponseDto } from "./dto/especialidades.response.dto";
import { MedicosEspecialidadesService } from "./medico.especialidades.service";
export declare class MedicoEspecialidadesController {
    private readonly especialidadesService;
    constructor(especialidadesService: MedicosEspecialidadesService);
    criaEspecialidades(dadosEspecialidade: any): Promise<EspecialidadesResponseDto>;
    listaEspecialidades(): Promise<EspecialidadesResponseDto[]>;
}
