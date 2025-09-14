import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicoEntity } from '../medico/medico.entity';
import { MedicoEspecialidadesEntity } from '../especialidades/especilidades.medico.entity';

@Injectable()
export class MedicoSeeder {
  constructor(
    @InjectRepository(MedicoEntity)
    private readonly medicoRepository: Repository<MedicoEntity>,
    @InjectRepository(MedicoEspecialidadesEntity)
    private readonly especialidadeRepository: Repository<MedicoEspecialidadesEntity>,
  ) {}

  async run() {
    const medicosData = [
      { nome: 'Dr. João da Silva', crm: '12345', cpf: '11111111111', especialidadesNomes: ['Cardiologia', 'Clínico Geral'] },
      { nome: 'Dra. Maria Oliveira', crm: '67890', cpf: '22222222222', especialidadesNomes: ['Pediatria', 'Endocrinologia'] },
      { nome: 'Dr. Pedro Costa', crm: '13579', cpf: '33333333333', especialidadesNomes: ['Neurologia'] },
      { nome: 'Dra. Ana Pereira', crm: '24680', cpf: '44444444444', especialidadesNomes: ['Oftalmologia', 'Reumatologia'] },
      { nome: 'Dr. Lucas Fernandes', crm: '11223', cpf: '55555555555', especialidadesNomes: ['Dermatologia'] },
      { nome: 'Dra. Júlia Santos', crm: '33445', cpf: '66666666666', especialidadesNomes: ['Ginecologia'] },
      { nome: 'Dr. Gabriel Martins', crm: '55667', cpf: '77777777777', especialidadesNomes: ['Ortopedia'] },
      { nome: 'Dra. Isabela Rocha', crm: '77889', cpf: '88888888888', especialidadesNomes: ['Psiquiatria', 'Neurologia'] },
      { nome: 'Dr. Rafael Souza', crm: '99001', cpf: '99999999999', especialidadesNomes: ['Urologia'] },
      { nome: 'Dra. Laura Gomes', crm: '00112', cpf: '10101010101', especialidadesNomes: ['Oncologia'] },
      { nome: 'Dr. Bruno Lima', crm: '22334', cpf: '11223344556', especialidadesNomes: ['Infectologia', 'Clínico Geral'] },
      { nome: 'Dra. Beatriz Almeida', crm: '44556', cpf: '12345678901', especialidadesNomes: ['Gastroenterologia'] },
      { nome: 'Dr. Vitor Mendes', crm: '66778', cpf: '13579246801', especialidadesNomes: ['Cardiologia'] },
      { nome: 'Dra. Camila Ferreira', crm: '88990', cpf: '14725836901', especialidadesNomes: ['Pediatria'] },
      { nome: 'Dr. Daniel Castro', crm: '99887', cpf: '15935748601', especialidadesNomes: ['Endocrinologia'] },
    ];

    for (const medicoData of medicosData) {
      const existe = await this.medicoRepository.findOne({ where: { crm: medicoData.crm } });

      if (!existe) {
        const medico = this.medicoRepository.create({
          nome: medicoData.nome,
          crm: medicoData.crm,
          cpf: medicoData.cpf,
        });

        const especialidades = await this.especialidadeRepository
          .createQueryBuilder('especialidade')
          .where('especialidade.nome IN (:...nomes)', { nomes: medicoData.especialidadesNomes })
          .getMany();

        medico.especialidades = especialidades;
        
        await this.medicoRepository.save(medico);
      }
    }

    console.log('✅ Seed de médicos inserida com sucesso!');
  }
}