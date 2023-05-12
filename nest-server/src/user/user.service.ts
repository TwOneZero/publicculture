import {
  HttpStatus,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/database/schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { Like, LikeDocument } from 'src/database/schemas/like.schema';
import {
  CulturalEvent,
  CulturalEventDocument,
} from 'src/database/schemas/culturalevent.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(CulturalEvent.name)
    private eventModel: Model<CulturalEventDocument>,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    @InjectModel(Like.name)
    private likeModel: Model<LikeDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOneById(id: string): Promise<User> {
    const objId = new mongoose.Types.ObjectId(id);
    return await this.userModel.findById(objId).exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    console.log('dd');

    return await this.userModel.findOne({ email });
  }

  async userlikesEvent(eventId: string, user: User) {
    let isLiked = true;
    //get event
    const event = await this.eventModel.findById(eventId).exec();
    if (!event) {
      throw new NotFoundException('ID에 해당하는 event 가 없음');
    }
    const index = event.likes.findIndex(
      (id) => String(id) === String(user._id),
    );
    //-1 이면 안 누른 것
    if (index === -1) {
      isLiked = false;
      const objUserId = new mongoose.Types.ObjectId(user._id);
      event.likes.push(objUserId);
    } else {
      //dislike ( 내 아이디를 찾아서 삭제)
      event.likes = event.likes.filter((id) => String(id) !== String(user._id));
      await this.likeModel.findOneAndDelete({ user });
    }

    //새로 업데이트
    await this.eventModel
      .findByIdAndUpdate(eventId, event, {
        new: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw new UnprocessableEntityException(err);
      });

    if (!isLiked) {
      const liked = new this.likeModel({
        user,
        event,
      });
      return await liked.save();
    }
  }
}
