import { ApiProperty } from '@nestjs/swagger';
import { Matches, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @Matches(/^[\w-\.]+@([\w]+\.)+[\w]{2,3}$/g)
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  password: string;
}
