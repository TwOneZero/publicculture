import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { RegisterUserDto } from 'src/auth/dto/register-auth.dto';
import { User, UserDocument } from 'src/user/schema/user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async hashUserPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  //유저 생성
  async create(registerUserDto: RegisterUserDto): Promise<User> {
    const { password, name, email } = registerUserDto;
    const user = await this.userModel.findOne({ email }).exec();
    if (user) {
      throw new ConflictException('이미 등록된 유저입니다.');
    }
    const hashedPwd = await this.hashUserPassword(password);
    return this.userModel.create({ password: hashedPwd, name, email });
  }

  //업데이트 후 유저 저장
  updateUser(updateuser: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(updateuser._id, updateuser, {
      new: true,
    });
  }

  //모든 유저 반환
  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  //필터를 통한 유저 탐색
  findOneByField(filter: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(filter);
  }

  //ID 로 User 찾기
  async findOneById(id: string): Promise<User> {
    try {
      return await this.userModel.findById(id);
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }

  //Email로 User 찾기
  findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }
}
