import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthResponseDto } from './dto/auth.response.dto';
import { Public } from '../decorators/public.decorator';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //testar
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(
    @Body('email') email: string,
    @Body('senha') senha: string,
  ): Promise<AuthResponseDto> {
    return await this.authService.signIn(email, senha);
  }

  @Public()
  @Post('signup')
  async signUp(
    @Body() createUsuarioDto: CreateUsuarioDto,
  ): Promise<AuthResponseDto> {
    return await this.authService.signUp(createUsuarioDto);
  }
}
