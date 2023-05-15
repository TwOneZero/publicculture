import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from '../schema/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentRepository {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  findById(id: string) {
    return this.commentModel.findById(id);
  }

  create({ user, event, comment }) {
    return this.commentModel.create({
      user,
      event,
      comment,
    });
  }
}
