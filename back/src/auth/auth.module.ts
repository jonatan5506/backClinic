import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [
    ConfigModule, // Necessário para registerAsync funcionar
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET') || 'fallback-secret',
          signOptions: {
            expiresIn: `${configService.get<number>('JWT_EXPIRATION_TIME') ?? 7200}s`,
          },
        };
      },
    }),
    UsuarioModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
