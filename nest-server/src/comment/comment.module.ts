import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, commentSchema } from 'src/comment/schema/comment.schema';
import { AuthModule } from 'src/auth/auth.module';
import { CulturaleventModule } from 'src/culturalevent/culturalevent.module';
import { LikeRepository } from 'src/like/repository/like.repository';
import { CommentRepository } from './repository/comment.repository';
import { LikeModule } from 'src/like/like.module';
import { CulturalEventRepository } from 'src/culturalevent/repository/culturalevent.repository';

@Module({
  imports: [
    AuthModule,
    CulturaleventModule,
    LikeModule,
    MongooseModule.forFeature([{ name: Comment.name, schema: commentSchema }]),
  ],
  controllers: [CommentController],
  providers: [
    CommentService,
    LikeRepository,
    CommentRepository,
    CulturalEventRepository,
  ],
  exports: [MongooseModule],
})
export class CommentModule {}
