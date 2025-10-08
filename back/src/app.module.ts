import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

import { DbModule } from './db/db.module';
//import { UsuarioResolver } from './usuario/usuario.resolver';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TaskModule,
    UsersModule,
    AuthModule,
    DbModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [
    {
      // Aplica AuthGuard globalmente
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    JwtService,
    //UsuarioResolver,
  ],
})
export class AppModule {}
