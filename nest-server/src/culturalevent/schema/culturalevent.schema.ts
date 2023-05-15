import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';

export type CulturalEventDocument = CulturalEvent & Document;

//문화행사 스키마
@Schema({ timestamps: true })
export class CulturalEvent extends Document {
  @Prop({ type: String })
  @ApiProperty()
  codename: string;
  @Prop({ type: String })
  @ApiProperty()
  guname: string;
  @Prop({ type: String })
  @ApiProperty()
  title: string;
  @Prop({ type: String })
  @ApiProperty()
  date: string;
  @Prop({ type: String })
  @ApiProperty()
  place: string;
  @Prop({ type: String })
  @ApiProperty()
  org_name: string;
  @Prop({ type: String })
  @ApiProperty()
  use_trgt: string;
  @Prop({ type: String })
  @ApiProperty()
  use_fee: string;
  @Prop({ type: String })
  @ApiProperty()
  player: string;
  @Prop({ type: String })
  @ApiProperty()
  program: string;
  @Prop({ type: String })
  @ApiProperty()
  etc_desc: string;
  @Prop({ type: String })
  @ApiProperty()
  org_link: string;
  @Prop({ type: String })
  @ApiProperty()
  main_img: string;
  @Prop({ type: String })
  @ApiProperty()
  rgstdate: string;
  @Prop({ type: String })
  @ApiProperty()
  ticket: string;
  @Prop({ type: String })
  @ApiProperty()
  strtdate: string;
  @Prop({ type: String })
  @ApiProperty()
  end_date: string;
  @Prop({ type: String })
  @ApiProperty()
  themecode: string;

  //썸네일에 표시하기 위해 갯수만 저장
  @Prop({ type: [mongoose.Types.ObjectId] })
  @ApiProperty({
    description: '좋아요 수',
    type: mongoose.Types.ObjectId,
    isArray: true,
    example: ['f81hf318f31381834', '13rwefs23fff4', '...'],
  })
  likes: mongoose.Types.ObjectId[];

  @Prop({ type: Number })
  @ApiProperty({
    description: '댓글 수',
    type: Number,
    example: 1,
    default: 0,
  })
  comments: number;
}

export const culturalEventSchema = SchemaFactory.createForClass(CulturalEvent);
