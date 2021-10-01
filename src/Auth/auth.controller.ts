import { Body, Controller, Post } from '@nestjs/common';
import { CreateLoginDto } from '../API/Users/user.dtos';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async auth(@Body() loginDto: CreateLoginDto) {
    return await this.authService.auth(loginDto.username, loginDto.password);
  }
}
