import { Injectable } from '@nestjs/common';
import { User } from 'src/user/schema/user.schema';
import { CommentRepository } from './repository/comment.repository';
import { CulturalEventRepository } from 'src/culturalevent/repository/culturalevent.repository';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly eventRepository: CulturalEventRepository,
  ) {}

  async getPostsComments(eventId: string) {
    const comments = await this.commentRepository
      .findById(eventId)
      .populate('user', 'name')
      .exec();

    return comments;
  }

  async addComments(eventId: string, user: User, commentBody: string) {
    //행사 코멘트 수 증가
    const event = await this.eventRepository.findByIdAndUpdate(
      eventId,
      { $inc: { comment: 1 } },
      { new: true },
    );

    //댓글 document 저장
    return await this.commentRepository.create({
      user,
      event,
      comment: commentBody,
    });
  }
}
