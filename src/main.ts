import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import { FiltroExcecaoGlobal } from './filtros/filtro-excecao-global';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir requisições do frontend
  app.enableCors({
    origin: '*', // endereço do seu frontend
    //credentials: true, // se precisar enviar cookies ou autenticação
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  
  // Filtro global de erros
  app.useGlobalFilters(new FiltroExcecaoGlobal());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(8000);
}
bootstrap();
