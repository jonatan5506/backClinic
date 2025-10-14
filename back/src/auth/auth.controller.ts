/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthResponseDto } from './dto/auth.response.dto';
import { Public } from '../decorators/public.decorator';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { AuthSignInDto } from './dto/auth.signIn.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(@Body() loginDto: AuthSignInDto): Promise<AuthResponseDto> {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }

  @Public()
  @Post('signup')
  async signUp(
    @Body() createUsuarioDto: CreateUsuarioDto,
  ): Promise<AuthResponseDto> {
    return await this.authService.signUp(createUsuarioDto);
  }

  // Rota que inicia o login no Google
  @Public()
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // O Passport redireciona automaticamente para o Google
  }

  // Callback que o Google retorna
  @Public()
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    const user = req.user;

    // Gera o token JWT via AuthService
    const token = await this.authService.signInWithGoogle(user);

    return {
      message: 'Usuário logado com sucesso!',
      access_token: token,
    };
  }
}
