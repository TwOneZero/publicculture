import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Like, LikeDocument } from '../schema/like.schema';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import { CulturalEvent } from 'src/culturalevent/schema/culturalevent.schema';

@Injectable()
export class LikeRepository {
  constructor(@InjectModel(Like.name) private likeModel: Model<LikeDocument>) {}

  findOneAndDelete(query: mongoose.QueryOptions) {
    return this.likeModel.findByIdAndDelete(query);
  }

  async create({
    user,
    event,
  }: {
    user: User;
    event: CulturalEvent;
  }): Promise<Like> {
    return this.likeModel
      .create({
        user,
        event,
      })
      .catch((err) => {
        throw new UnprocessableEntityException(err);
      });
  }

  findAll() {
    return this.likeModel.find();
  }
}
