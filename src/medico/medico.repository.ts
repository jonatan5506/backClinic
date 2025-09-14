import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MedicoEntity } from "./medico.entity";
import { Repository } from "typeorm";
import { MedicoEspecialidadesRepository } from "src/especialidades/especialidades.medico.repository";
import { AtualizaMedicoDto } from "./dto/atualiza.medico.dto";
import { MedicoResponseDto } from "./dto/medico.respose.dto";

@Injectable()
export class MedicoRepository {
    constructor(
        @InjectRepository(MedicoEntity)
        private readonly ormRepo: Repository<MedicoEntity>,
        private readonly especialidadesRepo: MedicoEspecialidadesRepository,
    ) { }

    async salva(dadosMedico: MedicoEntity): Promise<MedicoEntity> {
        return this.ormRepo.save(dadosMedico);
    }

    async listaMedicos(): Promise<MedicoEntity[]> {
        return this.ormRepo.find({
            relations: ['especialidades'],
        });
    }

    async atualizaMedico(
        id: string,
        dadosMedico: AtualizaMedicoDto,
    ): Promise<MedicoResponseDto> {
        const medico = await this.buscaPorId(id);

        Object.assign(medico, dadosMedico);

        if (dadosMedico.especialidades) {
            const especialidades = await this.especialidadesRepo.buscaPorNomes(
                dadosMedico.especialidades,
            );
            medico.especialidades = especialidades;
        }

        const medicoAtualizado = await this.ormRepo.save(medico);

        return {
            id: medicoAtualizado.id,
            nome: medicoAtualizado.nome,
            cpf: medicoAtualizado.cpf,
            crm: medicoAtualizado.crm,
            especialidades: medicoAtualizado.especialidades?.map(
                (especialidade) => especialidade.nome,
            ) || [],
        };
    }

    async deletaMedico(id: string): Promise<void> {
        const resultado = await this.ormRepo.delete(id);
        if (resultado.affected === 0) {
            throw new NotFoundException('Médico não encontrado.');
        }
    }

    private async buscaPorId(id: string) {
        const possivelMedico = await this.ormRepo.findOneBy({
            id: id,
        });
        
        if (!possivelMedico) {
            // Lançar um NotFoundException é mais apropriado aqui
            throw new NotFoundException('Médico não existe');
        }
        return possivelMedico;
    }
}
