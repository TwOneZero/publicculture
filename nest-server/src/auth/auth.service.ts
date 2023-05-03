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

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly config: ConfigService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user._id },
      { secret: this.config.get<string>('JWT_SECRET'), expiresIn: '1h' },
    );
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');
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
}
