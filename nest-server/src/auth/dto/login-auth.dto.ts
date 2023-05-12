import { PickType } from '@nestjs/swagger';
import { User } from 'src/database/schemas/user.schema';

export class LoginUserDto extends PickType(User, ['email', 'password']) {}
