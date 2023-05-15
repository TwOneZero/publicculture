import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/schema/user.schema';

export class LoginUserDto extends PickType(User, ['email', 'password']) {}
