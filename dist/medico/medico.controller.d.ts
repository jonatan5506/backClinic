import { CriaMedicoDTO } from "./dto/cria.medico.dto";
import { MedicoService } from "./medico.service";
import { MedicoEntity } from "./medico.entity";
import { AtualizaMedicoDto } from "./dto/atualiza.medico.dto";
export declare class MedicoController {
    private readonly medicoService;
    constructor(medicoService: MedicoService);
    criaMedico(dadosMedico: CriaMedicoDTO): Promise<Partial<MedicoEntity>>;
    listaMedicos(): Promise<import("./dto/medico.respose.dto").MedicoResponseDto[]>;
    atualizamedico(id: string, dadosMedico: AtualizaMedicoDto): Promise<void>;
    deletaMedico(id: string): Promise<void>;
}
