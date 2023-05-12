import { PickType } from '@nestjs/swagger';
import { User } from 'src/database/schemas/user.schema';

export class RegisterUserDto extends PickType(User, [
  'name',
  'email',
  'password',
]) {}
