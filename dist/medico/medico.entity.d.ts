import { MedicoEspecialidadesEntity } from "../especialidades/especilidades.medico.entity";
export declare class MedicoEntity {
    id: string;
    nome: string;
    crm: string;
    cpf: string;
    especialidades: MedicoEspecialidadesEntity[];
}
