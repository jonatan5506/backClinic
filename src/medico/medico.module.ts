import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoEntity } from './medico.entity';
import { MedicoRepository } from './medico.repository';
import { MedicoEspecialidadesRepository } from '../especialidades/especialidades.medico.repository';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { MedicoEspecialidadesEntity } from '../especialidades/especilidades.medico.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MedicoEntity, MedicoEspecialidadesEntity]),
  ],
  controllers: [MedicoController],
  providers: [MedicoRepository, MedicoEspecialidadesRepository, MedicoService],
})
export class MedicoModule {}
