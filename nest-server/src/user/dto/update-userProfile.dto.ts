import { PickType } from '@nestjs/swagger';
import { IsArray, IsIn, IsString, isArray } from 'class-validator';
import { Genre, User } from 'src/user/schema/user.schema';

export class UpdateUserProfileDto extends PickType(User, ['name', 'genre']) {}
