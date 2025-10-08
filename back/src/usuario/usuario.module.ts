import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioEntity } from './entities/usuario.entity';

@Module({
  controllers: [UsuarioController],
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
