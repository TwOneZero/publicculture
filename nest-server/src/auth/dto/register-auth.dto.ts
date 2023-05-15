import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/schema/user.schema';

export class RegisterUserDto extends PickType(User, [
  'name',
  'email',
  'password',
]) {}
