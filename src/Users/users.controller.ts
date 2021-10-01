import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateLoginDto } from './user.dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  async auth(@Body() loginDto: CreateLoginDto): Promise<Boolean> {
    const user = await this.usersService.auth(loginDto.username, loginDto.password);
    return !!user.length;
  }
}
