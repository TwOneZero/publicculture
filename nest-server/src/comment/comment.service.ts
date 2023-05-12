import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from 'src/database/schemas/comment.schema';
import { CulturalEvent } from 'src/database/schemas/culturalevent.schema';
import { User } from 'src/database/schemas/user.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(CulturalEvent.name) private eventModel: Model<CulturalEvent>,
  ) {}

  async getPostsComments(eventId: string) {
    const comments = await this.commentModel
      .find({ event: eventId })
      .populate('user', 'name')
      .exec();

    return comments;
  }

  async addComments(eventId: string, user: User, commentBody: string) {
    //행사 코멘트 수 증가
    const event = await this.eventModel
      .findByIdAndUpdate(eventId, { $inc: { comments: 1 } }, { new: true })
      .exec();

    //댓글 document 저장
    const newComment = new this.commentModel({
      user,
      event,
      comment: commentBody,
    });

    return await newComment.save();
  }
}
