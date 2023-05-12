import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';
import { Type } from 'class-transformer';
import { CulturalEvent } from './culturalevent.schema';
import { ApiProperty } from '@nestjs/swagger';

export type LikeDocument = Like & Document;

@Schema({ timestamps: true })
export class Like extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  @Type(() => User)
  @ApiProperty({
    example: '59392fid129sahdcce2',
    description: 'user 정보',
    type: User,
  })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CulturalEvent.name })
  @Type(() => CulturalEvent)
  @ApiProperty({
    example: '912dj8f3hffsdhcsc',
    description: 'event 정보',
    type: CulturalEvent,
  })
  event: CulturalEvent;
}

export const likeSchema = SchemaFactory.createForClass(Like);
