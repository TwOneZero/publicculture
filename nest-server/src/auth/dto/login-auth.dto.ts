import { ApiProperty, PickType } from '@nestjs/swagger';
import { Matches, IsString, MinLength } from 'class-validator';
import { RegisterUserDto } from './register-auth.dto';

export class LoginUserDto extends PickType(RegisterUserDto, [
  'email',
  'password',
] as const) {}
