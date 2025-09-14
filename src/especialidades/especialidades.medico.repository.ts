import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { MedicoEspecialidadesEntity } from './especilidades.medico.entity';
import { EspecialidadesResponseDto } from './dto/especialidades.response.dto';

@Injectable()
export class MedicoEspecialidadesRepository {
  constructor(
    @InjectRepository(MedicoEspecialidadesEntity)
    private readonly ormRepo: Repository<MedicoEspecialidadesEntity>,
  ) { }

  async criaEspecialidade(dadosEspecialidade: MedicoEspecialidadesEntity): Promise<MedicoEspecialidadesEntity> {
    return await this.ormRepo.save(dadosEspecialidade);
  }

  async listaEspecialidades(): Promise<EspecialidadesResponseDto[]> {
    const especialidades = await this.ormRepo.find({
      //retorna a coluna nomem id
      select: ['nome','id']
    });
    return especialidades;
  }

  async atualizaEspecialidades(id: string, dadosEspecialidade: Partial<MedicoEspecialidadesEntity>): Promise<EspecialidadesResponseDto> {
    const especialidades = await this.buscaPorId(id);

    Object.entries(dadosEspecialidade).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      especialidades[chave] = valor;
    });

    await this.ormRepo.save(especialidades);
    return {
      nome: especialidades.nome,
    }
  }

  async deletaEspecialidade(id: string): Promise<void> {
    try {
      const especialidade = await this.buscaPorId(id);
      await this.ormRepo.delete(especialidade.id);
    } catch (error) {
      throw new Error('Erro ao deletar a especialidade: ' + error.message);
    }
  }

  private async buscaPorId(id: string) {
    const possivelEspecialidade = await this.ormRepo.findOneBy({
      id: id,
    });

    if (!possivelEspecialidade) {
      throw new Error('Especialidade não existe');
    }

    return possivelEspecialidade;
  }

  async buscaPorNomes(nomes: string[]): Promise<MedicoEspecialidadesEntity[]> {
    const especialidades = await this.ormRepo.find({
      where: { nome: In(nomes) },
    });

    if (especialidades.length !== nomes.length) {
      const encontrados = especialidades.map(e => e.nome);
      const faltando = nomes.filter(n => !encontrados.includes(n));
      throw new NotFoundException(`Especialidades não encontradas: ${faltando.join(', ')}`);
    }

    return especialidades;
  }
}

