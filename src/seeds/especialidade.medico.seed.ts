import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicoEspecialidadesEntity } from 'src/especialidades/especilidades.medico.entity';

@Injectable()
export class MedicoEspecialidadeSeed {
  constructor(
    @InjectRepository(MedicoEspecialidadesEntity)
    private readonly especialidadeRepository: Repository<MedicoEspecialidadesEntity>,
  ) {}

  async run() {
    const especialidades = [
      'Clínico Geral',
      'Cardiologia',
      'Endocrinologia',
      'Oftalmologia',
      'Dermatologia',
      'Pediatria',
      'Ginecologia',
      'Ortopedia',
      'Neurologia',
      'Psiquiatria',
      'Urologia',
      'Oncologia',
      'Reumatologia',
      'Infectologia',
      'Gastroenterologia',
    ];

    for (const nome of especialidades) {
      const existe = await this.especialidadeRepository.findOne({ where: { nome } });
      if (!existe) {
        const especialidade = this.especialidadeRepository.create({ nome });
        await this.especialidadeRepository.save(especialidade);
      }
    }

    console.log('✅ Seed de especialidades inserida com sucesso!');
  }
}
