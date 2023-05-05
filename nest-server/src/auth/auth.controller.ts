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
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/register-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { CurUser } from 'src/common/decorators/user.decorator';
import { User } from 'src/database/schemas/user.schema';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { GetContext } from 'src/common/decorators/getContext.decorator';

export interface IOAuthUser {
  user: Pick<User, 'email' | 'password' | 'name'>;
}

@Controller('auth')
@ApiTags('인증 API')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/login')
  @ApiOperation({ summary: '로그인 API' })
  @ApiCreatedResponse({
    description: '로그인 한 유저 정보',
    type: User,
  })
  async login(@Body() loginUserDto: LoginUserDto, @GetContext() context: any) {
    return await this.authService.loginUser(loginUserDto, context);
  }

  @UseGuards(AuthGuard('kakao'))
  @Get('/login/kakao')
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
    type: 'string',
  })
  @UseGuards(AuthGuard('refresh'))
  restoreAccessToken(@CurUser() user: User) {
    return this.authService.getAccessToken({ user });
  }
}
