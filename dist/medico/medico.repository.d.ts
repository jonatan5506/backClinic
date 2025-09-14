import { MedicoEntity } from "./medico.entity";
import { Repository } from "typeorm";
import { MedicoEspecialidadesRepository } from "src/especialidades/especialidades.medico.repository";
import { AtualizaMedicoDto } from "./dto/atualiza.medico.dto";
import { MedicoResponseDto } from "./dto/medico.respose.dto";
export declare class MedicoRepository {
    private readonly ormRepo;
    private readonly especialidadesRepo;
    constructor(ormRepo: Repository<MedicoEntity>, especialidadesRepo: MedicoEspecialidadesRepository);
    salva(dadosMedico: MedicoEntity): Promise<MedicoEntity>;
    listaMedicos(): Promise<MedicoEntity[]>;
    atualizaMedico(id: string, dadosMedico: AtualizaMedicoDto): Promise<MedicoResponseDto>;
    deletaMedico(id: string): Promise<void>;
    private buscaPorId;
}
