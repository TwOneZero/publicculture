import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { CurUser } from 'src/common/decorators/user.decorator';
import { User } from 'src/user/schema/user.schema';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { RegisterUserDto } from './dto/register-auth.dto';

export interface IOAuthUser {
  user: Pick<User, 'email' | 'password' | 'name'>;
}

@Controller('auth')
@ApiTags('인증 API')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: '로그인 API' })
  @ApiCreatedResponse({
    description: '로그인 엑세스 토큰',
    type: String,
  })
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.loginUser(loginUserDto, res);
  }

  @Get('/logout')
  @ApiOperation({ summary: '로그아웃' })
  @ApiCreatedResponse({
    description: '로그아웃 후 권한 유무',
    type: String,
  })
  @UseGuards(AuthGuard('jwt'))
  logout(@Res({ passthrough: true }) res: Response, @CurUser() user: User) {
    return this.authService.logout(res, user);
  }

  @Get('/login/kakao')
  @ApiOperation({ summary: '카카오 로그인' })
  @ApiCreatedResponse({
    description: '카카오 로그인 엑세스 토큰',
    type: String,
  })
  @UseGuards(AuthGuard('kakao'))
  loginKakao(@Req() req: Request & IOAuthUser, @Res() res: Response) {
    return this.authService.oAuthLogin(req, res);
  }

  @Post('/register')
  @ApiOperation({ summary: '회원가입 API' })
  @ApiCreatedResponse({
    description: '회원가입 한 유저 정보',
    type: User,
  })
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.registerUser(registerUserDto);
  }

  @Post('/restoreToken')
  @ApiOperation({ summary: '쿠키 재발급' })
  @ApiCreatedResponse({
    description: 'Token string',
    type: String,
  })
  @UseGuards(AuthGuard('refresh'))
  restoreAccessToken(@CurUser() user: User) {
    return this.authService.getAccessToken(user);
  }

  @Get('/check')
  @ApiOperation({ summary: '권한 체크' })
  @ApiCreatedResponse({
    description: 'User Info, isAuth(True or False)',
  })
  @UseGuards(AuthGuard('jwt'))
  checkAuth(@CurUser() user: User) {
    return { user, isAuth: true };
  }

  //회원 가입 or 유저 업데이트 시 기존 회원 이름 체크
  @Post('/checkName')
  @ApiOperation({ summary: '유저 이름 존재하는 지 확인' })
  @ApiCreatedResponse({
    type: Boolean,
    description: '유저 이름이 존재하는 지 확인',
  })
  checkName(@Body('name') name: string): Promise<boolean> {
    return this.authService.checkName(name);
  }
}
