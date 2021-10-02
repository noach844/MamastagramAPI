import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CreateLoginDto } from '../API/Users/user.dtos';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async auth(@Body() loginDto: CreateLoginDto) {
    const isAuth = await this.authService.auth(
      loginDto.username,
      loginDto.password,
    );
    if (isAuth) {
      return isAuth;
    }
    throw new UnauthorizedException();
  }

  @Get('/isAuth')
  @UseGuards(JwtAuthGuard)
  isAuth() {
    return true;
  }
}
