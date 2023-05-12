import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, commentSchema } from 'src/database/schemas/comment.schema';
import { AuthModule } from 'src/auth/auth.module';
import { CulturaleventModule } from 'src/culturalevent/culturalevent.module';

@Module({
  imports: [
    AuthModule,
    CulturaleventModule,
    MongooseModule.forFeature([{ name: Comment.name, schema: commentSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
