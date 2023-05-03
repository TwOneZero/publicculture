import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/database/schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, email, name } = createUserDto;
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new ConflictException('이미 등록된 유저입니다.');
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ password: hashedPwd, email, name });
    return newUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOneById(id: string): Promise<User> {
    const objId = new mongoose.Types.ObjectId(id);
    return this.userModel.findById(objId);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
