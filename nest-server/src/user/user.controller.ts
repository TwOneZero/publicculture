import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.userService.findOneById(id);
  }

  @Get()
  async findOneByEmail(@Query('email') email: string) {
    return await this.userService.findOneByEmail(email);
  }
}
