import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { MedicoEntity } from "../medico/medico.entity";

@Entity('especialidades')
export class MedicoEspecialidadesEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    nome: string;

    @ManyToMany(() => MedicoEntity, (medico) => medico.especialidades)
    medicos: MedicoEntity[];
}
