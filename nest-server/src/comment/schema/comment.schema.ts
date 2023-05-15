import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { User } from '../../user/schema/user.schema';
import { CulturalEvent } from '../../culturalevent/schema/culturalevent.schema';

export type CommentDocument = Comment & Document;

//유저 댓글
@Schema({ timestamps: true })
export class Comment extends Document {
  //One-to-many
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  @Type(() => User)
  @ApiProperty({
    example: 'example-user',
    description: 'user',
    required: true,
  })
  user: User;

  //One-to-many
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CulturalEvent.name })
  @Type(() => CulturalEvent)
  @ApiProperty({
    example: 'example-event',
    description: 'event',
    required: true,
  })
  event: CulturalEvent;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'this is an example of comment',
    description: 'comment',
    required: true,
  })
  comment: string;
}

export const commentSchema = SchemaFactory.createForClass(Comment);
