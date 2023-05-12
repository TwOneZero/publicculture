import {
  ConflictException,
  Injectable,
  UnauthorizedException,
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
import { Request, Response } from 'express';
import { IOAuthUser } from './auth.controller';

interface SetRefreshArgsType {
  user: User;
  res: Response;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  setRefreshToken({ user, res }: SetRefreshArgsType) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user._id },
      {
        secret: this.config.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: '2w',
      },
    );

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader(
      'Set-Cookie',
      `refreshToken=${refreshToken}; path=/; domain=localhost; SameSite=None; Secure; httpOnly;`,
    );
  }

  getAccessToken(user: User) {
    return this.jwtService.sign(
      { email: user.email, sub: user._id },
      { secret: this.config.get<string>('JWT_SECRET'), expiresIn: '1h' },
    );
  }

  async loginUser(loginUserDto: LoginUserDto, res: Response) {
    const { email, password } = loginUserDto;
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');
    this.setRefreshToken({ user, res: res });
    return this.getAccessToken(user);
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    const { email, password, name } = registerUserDto;
    const user = await this.userModel.findOne({ email }).exec();
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
    let user = await this.userModel.findOne({ email: req.user.email }).exec();
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

  async logout(res: Response, user: User) {
    //있는 회원인지 확인
    const isUser = await this.userModel.findById(user._id);
    //맞다면 로그아웃
    if (isUser) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader(
        'Set-Cookie',
        `refreshToken=''; path=/; domain=localhost; SameSite=None; Secure; httpOnly;`,
      );
      return { isAuth: false };
    } else {
      throw new UnauthorizedException('존재하지 않는 회원입니다.');
    }
  }
}
