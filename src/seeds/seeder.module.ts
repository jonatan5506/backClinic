import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoEspecialidadeSeed } from './especialidade.medico.seed';
import { MedicoEspecialidadesEntity } from 'src/especialidades/especilidades.medico.entity';
import { MedicoEspecialidadesRepository } from 'src/especialidades/especialidades.medico.repository';
import { MedicoSeeder } from './medicos.seed';
import { MedicoEntity } from 'src/medico/medico.entity';
import { MedicoRepository } from 'src/medico/medico.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity.{ts,js}'],
        synchronize: true, // Apenas em desenvolvimento
      }),
    }),
    TypeOrmModule.forFeature([MedicoEspecialidadesEntity, MedicoEntity]),
  ],
  providers: [
    MedicoEspecialidadeSeed,
    MedicoEspecialidadesEntity,
    MedicoEspecialidadesRepository,
    MedicoSeeder,
    MedicoEntity,
    MedicoRepository
  ],
})
export class SeederModule {}