import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from 'src/user/schema/user.schema';
import mongoose from 'mongoose';
import { CulturalEvent } from 'src/culturalevent/schema/culturalevent.schema';
import { UserRepository } from './repository/user.repository';
import { CulturalEventRepository } from 'src/culturalevent/repository/culturalevent.repository';
import { LikeRepository } from 'src/like/repository/like.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly likeRepository: LikeRepository,
    private readonly userRepository: UserRepository,
    private readonly eventRepository: CulturalEventRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOneById(id: string): Promise<User> {
    return await this.userRepository.findOneById(id);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOneByEmail(email);
  }

  async userlikesEvent(eventId: string, user: User): Promise<CulturalEvent> {
    let isLiked = false;
    //get event
    const event = await this.eventRepository.findOneById(eventId);
    if (!event) {
      throw new NotFoundException('ID에 해당하는 event 가 없음');
    }
    const index = event.likes.findIndex(
      (id) => String(id) === String(user._id),
    );
    //-1 이면 안 누른 것
    if (index === -1) {
      isLiked = true;
      const objUserId = new mongoose.Types.ObjectId(user._id);
      event.likes.push(objUserId);
    } else {
      //dislike ( 내 아이디를 찾아서 삭제)
      event.likes = event.likes.filter((id) => String(id) !== String(user._id));
      await this.likeRepository.findOneAndDelete({ user });
    }

    //새로 업데이트
    const result = await this.eventRepository
      .findByIdAndUpdate(eventId, event, { new: true })
      .catch((err) => {
        throw new UnprocessableEntityException(err);
      });

    //좋아요 새로 눌렀을 때
    if (isLiked) {
      await this.likeRepository.create({ user, event }).then(() => {
        return result;
      });
    }
    return result;
  }
}
