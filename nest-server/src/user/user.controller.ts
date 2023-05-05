import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { CurUser } from 'src/common/decorators/user.decorator';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/database/schemas/user.schema';

@Controller('user')
@ApiTags('유저 API')
@UseGuards(AuthGuard())
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  @Get()
  @ApiOperation({ summary: '모든 유저 조회 API' })
  @ApiCreatedResponse({ description: '모든 유저 정보 가져오기', type: [User] })
  async findAll(@CurUser() curUser: any) {
    console.log('유저 정보', curUser);

    return await this.userService.findAll();
  }

  @Get('/ones')
  @ApiOperation({ summary: '이메일로 유저 조회하기' })
  @ApiCreatedResponse({
    description: '이메일로 유저 정보 가져오기',
    type: User,
  })
  async findOneByEmail(@Query('email') email: string) {
    return await this.userService.findOneByEmail(email);
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID로 유저 조회하기' })
  @ApiCreatedResponse({
    description: 'ID로 유저 정보 가져오기',
    type: User,
  })
  async findOneById(@Param('id') id: string) {
    return await this.userService.findOneById(id);
  }
}
