import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

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

  @Prop([String])
  @ApiProperty({
    example: '뮤지컬, 연극, 국악',
    description: '선호 장르 (genre)',
  })
  genre: string[];
}

export const userSchema = SchemaFactory.createForClass(User);
