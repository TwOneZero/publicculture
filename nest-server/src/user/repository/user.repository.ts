import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from 'src/auth/dto/register-auth.dto';
import { User, UserDocument } from 'src/user/schema/user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  //유저 생성
  async create(registerUserDto: RegisterUserDto): Promise<UserDocument> {
    const { password, name, email } = registerUserDto;
    const user = await this.userModel.findOne({ email }).exec();
    if (user) {
      throw new ConflictException('이미 등록된 유저입니다.');
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    return this.userModel.create({ password: hashedPwd, name, email });
  }

  //모든 유저 반환
  findAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }

  //ID 로 User 찾기
  findOneById(id: string): Promise<UserDocument> {
    return this.userModel.findById(id);
  }

  //Email로 User 찾기
  findOneByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email });
  }
}
