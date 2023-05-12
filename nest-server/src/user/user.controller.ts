import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { CurUser } from 'src/common/decorators/user.decorator';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/database/schemas/user.schema';
import { CulturalEvent } from 'src/database/schemas/culturalevent.schema';

@Controller('user')
@ApiTags('유저 API')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '모든 유저 조회 API' })
  @ApiCreatedResponse({ description: '모든 유저 정보 가져오기', type: [User] })
  findAll(@CurUser() curUser: any) {
    console.log('유저 정보', curUser);

    return this.userService.findAll();
  }

  @Get('/ones')
  @ApiOperation({ summary: '이메일로 유저 조회하기' })
  @ApiCreatedResponse({
    description: '이메일로 유저 정보 가져오기',
    type: User,
  })
  findOneByEmail(@Query('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Post('/like/:eventId')
  @ApiOperation({ summary: 'event 좋아요 누르기' })
  @ApiCreatedResponse({
    description: 'ID로 유저 정보 가져오기',
    type: CulturalEvent,
  })
  userlikesEvent(@Param('eventId') eventId: string, @CurUser() user: User) {
    return this.userService.userlikesEvent(eventId, user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID로 유저 조회하기' })
  @ApiCreatedResponse({
    description: 'ID로 유저 정보 가져오기',
    type: User,
  })
  findOneById(@Param('id') id: string) {
    return this.userService.findOneById(id);
  }
}
