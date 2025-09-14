import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

import { MedicoEspecialidadesRepository } from "./especialidades.medico.repository";
import { MedicoEspecialidadesEntity } from "./especilidades.medico.entity";

import { EspecialidadesResponseDto } from "./dto/especialidades.response.dto";
import { AtualizaEspecialidadeDto } from "./dto/atualiza.especialidade.dto";
import { CriaEspecialidadeDto } from "./dto/cria.especialidade.dto";

@Injectable()
export class MedicosEspecialidadesService {
  constructor(
    private readonly especialidadesRepository: MedicoEspecialidadesRepository
  ) { }

  async criaEspecialidade(dadosEspecialidades: CriaEspecialidadeDto) {
    try {
      const especialidade = new MedicoEspecialidadesEntity();
      especialidade.id = uuid();
      especialidade.nome = dadosEspecialidades.nome.trim();

      const especialidadeSalva = await this.especialidadesRepository.criaEspecialidade(especialidade);
      
      return especialidadeSalva;
    } catch (error: any) {
      // Se já existir especialidade com o mesmo nome (violação unique constraint)
      if (error.code === '23505') {
        // Postgres unique_violation
        throw new BadRequestException('Já existe uma especialidade com esse nome.');
      }

      console.error('Erro ao criar especialidade:', error);
      throw new InternalServerErrorException('Erro interno ao criar especialidade');
    }
  }

  async listaEspecialidades(): Promise<EspecialidadesResponseDto[]> {
    const especialidades = await this.especialidadesRepository.listaEspecialidades();
    return especialidades;
  }

  async atualizaEspecialidade(id: string, dadosEspecialidades: AtualizaEspecialidadeDto): Promise<void> {
    await this.especialidadesRepository.atualizaEspecialidades(id, dadosEspecialidades);
  }

  async deletaEspecialidade(id: string) {
    try {
      await this.especialidadesRepository.deletaEspecialidade(id);
    } catch (error) {
      throw new Error('Erro ao deletar a especialidade: ' + error.message);
    }
    return { message: 'Especialidade deletado com sucesso' }
  }
}
