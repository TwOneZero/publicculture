import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @Matches(/^[\w-\.]+@([\w]+\.)+[\w]{2,3}$/g)
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  password: string;
}
