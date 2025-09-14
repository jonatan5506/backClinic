import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostgresConfigService } from './config/postgres.config.service';
import { UsuarioModule } from './usuario /usuario.module';
import { MedicoModule } from './medico/medico.module';
import { MedicoEspecialidadesModule } from './especialidades/especialidades.medico.module';

@Module({
  imports: [
    UsuarioModule,
    MedicoModule,
    MedicoEspecialidadesModule,
    //Config do Typeorm
    //ConfigModule funciona como um dotenv/config
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
