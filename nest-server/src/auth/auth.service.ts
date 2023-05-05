import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RegisterUserDto } from './dto/register-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/database/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { UserService } from 'src/user/user.service';
import { Request, Response } from 'express';
import { IOAuthUser } from './auth.controller';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly config: ConfigService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user._id },
      {
        secret: this.config.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: '2w',
      },
    );

    // 개발환경
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);

    // 배포환경
    // res.setHeader('Access-Control-Allow-Origin', 'https://myfrontsite.com')
    // res.setHeader(
    //   'Set-Cookie',
    //   `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly;`
    // )
  }

  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user._id },
      { secret: this.config.get<string>('JWT_SECRET'), expiresIn: '1h' },
    );
  }

  async loginUser(loginUserDto: LoginUserDto, context: any) {
    const { email, password } = loginUserDto;
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');
    this.setRefreshToken({ user, res: context.res });
    return this.getAccessToken({ user });
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    const { password, email, name } = registerUserDto;
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new ConflictException('이미 등록된 유저입니다.');
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ password: hashedPwd, email, name });
    return newUser.save();
  }

  //소셜 로그인
  async oAuthLogin(req: Request & IOAuthUser, res: Response) {
    // 1. 가입 확인
    let user = await this.userService.findOneByEmail(req.user.email);
    //2. 가입 안돼있다 -> 회원가입
    if (!user) {
      user = await this.registerUser({
        email: req.user.email,
        password: req.user.password,
        name: req.user.name,
      });
    }
    //3. 로그인
    this.setRefreshToken({ user, res });
    //리다이렉트
    return res.redirect(
      'http://127.0.0.1:5500/publicculture/frontend/social-login.html',
    );
  }
}
