import { Repository } from 'typeorm';
import { MedicoEspecialidadesEntity } from './especilidades.medico.entity';
import { EspecialidadesResponseDto } from './dto/especialidades.response.dto';
export declare class MedicoEspecialidadesRepository {
    private readonly ormRepo;
    constructor(ormRepo: Repository<MedicoEspecialidadesEntity>);
    criaEspecialidade(dadosEspecialidade: MedicoEspecialidadesEntity): Promise<MedicoEspecialidadesEntity>;
    listaEspecialidades(): Promise<EspecialidadesResponseDto[]>;
    atualizaEspecialidades(id: string, dadosEspecialidade: Partial<MedicoEspecialidadesEntity>): Promise<EspecialidadesResponseDto>;
    deletaEspecialidade(id: string): Promise<void>;
    private buscaPorId;
    buscaPorNomes(nomes: string[]): Promise<MedicoEspecialidadesEntity[]>;
}
