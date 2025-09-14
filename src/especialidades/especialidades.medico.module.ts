import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoEspecialidadesEntity } from './especilidades.medico.entity';
import { MedicoEspecialidadesController } from './especialidades.medico.controller';
import { MedicoEspecialidadesRepository } from './especialidades.medico.repository';
import { MedicosEspecialidadesService } from './especialidades.medico.service';

@Module({
  imports: [TypeOrmModule.forFeature([MedicoEspecialidadesEntity])],
  controllers: [MedicoEspecialidadesController],
  providers: [MedicoEspecialidadesRepository, MedicosEspecialidadesService],
})
export class MedicoEspecialidadesModule {}