import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioRepository } from './usuario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository, /* EmailEhUnicoValidator */],
})
export class UsuarioModule {}
