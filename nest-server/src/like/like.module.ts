import { Module } from '@nestjs/common';
import { LikeRepository } from './repository/like.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Like, likeSchema } from './schema/like.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Like.name, schema: likeSchema }]),
  ],
  providers: [],
  exports: [MongooseModule],
})
export class LikeModule {}
