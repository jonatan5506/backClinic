import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthResponseDto } from './dto/auth.response.dto';
import { Public } from '../decorators/public.decorator';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { AuthSignInDto } from './dto/auth.signIn.dto';

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
}
