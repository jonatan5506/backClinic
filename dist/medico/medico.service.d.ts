import { MedicoEntity } from "./medico.entity";
import { CriaMedicoDTO } from "./dto/cria.medico.dto";
import { MedicoEspecialidadesRepository } from "../especialidades/especialidades.medico.repository";
import { MedicoResponseDto } from "./dto/medico.respose.dto";
import { AtualizaMedicoDto } from "./dto/atualiza.medico.dto";
import { MedicoRepository } from "./medico.repository";
export declare class MedicoService {
    private readonly medicoRepository;
    private readonly especialidadesRepo;
    constructor(medicoRepository: MedicoRepository, especialidadesRepo: MedicoEspecialidadesRepository);
    criaMedico(dados: CriaMedicoDTO): Promise<Partial<MedicoEntity>>;
    listaMedicos(): Promise<MedicoResponseDto[]>;
    atualizaMedico(id: string, dadosMedico: AtualizaMedicoDto): Promise<MedicoResponseDto>;
    deletaMedico(id: string): Promise<void>;
}
