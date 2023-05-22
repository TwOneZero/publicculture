import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsIn, IsString, Matches, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export const Genre = [
  '문화교양',
  '강좌',
  '전시',
  '미술',
  '뮤지컬',
  '오페라',
  '기타',
  '연극',
  '무용',
  '영화',
  '국악',
  '콘서트',
  '축제',
  '클래식',
  '독주',
  '독창회',
];

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  @IsString()
  @ApiProperty({
    example: 'john',
    description: 'name',
    required: true,
  })
  name: string;

  @Prop({ required: true, unique: true })
  @IsString()
  @Matches(/^[\w-\.]+@([\w]+\.)+[\w]{2,3}$/g)
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'email',
    required: true,
  })
  email: string;

  @Prop({ required: true })
  @IsString()
  @MinLength(5)
  @ApiProperty({
    example: '123ghf13',
    description: 'password',
    required: true,
  })
  password: string;

  @Prop({ default: [], type: [String] })
  @ApiProperty({
    example: Genre,
    isArray: true,
    description: '선호 장르 (genre)',
    default: [],
  })
  @IsArray()
  @IsIn(Genre, { each: true })
  genre: string[];
}

export const userSchema = SchemaFactory.createForClass(User);
