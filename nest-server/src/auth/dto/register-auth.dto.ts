import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';
import { User } from 'src/database/schemas/user.schema';

export class RegisterUserDto extends PickType(User, [
  'email',
  'name',
  'password',
]) {}
