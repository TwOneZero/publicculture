import { ApiProperty } from '@nestjs/swagger';
import { Matches, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @Matches(/^[\w-\.]+@([\w]+\.)+[\w]{2,3}$/g)
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  password: string;
}
