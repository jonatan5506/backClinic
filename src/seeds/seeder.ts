import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder.module';
import { MedicoEspecialidadeSeed } from './especialidade.medico.seed';
import { MedicoSeeder } from './medicos.seed'; // Importe a seeder de médicos

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(SeederModule);

  const especialidadeSeed = app.get(MedicoEspecialidadeSeed);
  await especialidadeSeed.run();

  const medicoSeed = app.get(MedicoSeeder); // Obtenha a nova seeder
  await medicoSeed.run(); // Execute a seeder de médicos

  await app.close();
}

bootstrap();