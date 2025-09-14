import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { MedicoEspecialidadesEntity } from "../especialidades/especilidades.medico.entity";

@Entity('medicos')
export class MedicoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    crm: string;

    @Column()
    cpf: string;

    @ManyToMany(() => MedicoEspecialidadesEntity, (especialidade) => especialidade.medicos, {
        cascade: true,
    })
    @JoinTable({
        name: 'medico_especialidades', // tabela pivot
        joinColumn: {
            name: 'medico_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'especialidade_id',
            referencedColumnName: 'id',
        },
    })
    especialidades: MedicoEspecialidadesEntity[];

}
