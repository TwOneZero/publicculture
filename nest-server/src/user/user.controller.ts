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
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/user/schema/user.schema';
import { CulturalEvent } from 'src/culturalevent/schema/culturalevent.schema';
import { UpdateUserProfileDto } from './dto/update-userProfile.dto';

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

  @Get(':id')
  @ApiOperation({ summary: 'ID로 유저 조회하기' })
  @ApiCreatedResponse({
    description: 'ID로 유저 정보 가져오기',
    type: User,
  })
  findOneById(@Param('id') id: string) {
    return this.userService.findOneById(id);
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

  @Post('update')
  @ApiOperation({ summary: '유저 프로필 업데이트' })
  @ApiCreatedResponse({
    type: User,
    description: 'name or genre update',
  })
  @UseGuards(AuthGuard('jwt'))
  updateUserProfile(
    @Body() updateUsersDto: UpdateUserProfileDto,
    @CurUser() user: User,
  ): Promise<User> {
    return this.userService.updateUserProfile(updateUsersDto, user);
  }

  @Post('update/password')
  @ApiOperation({ summary: '유저 비밀번호 업데이트' })
  @ApiBody({
    description: '비밀번호(string)',
    type: String,
  })
  @ApiCreatedResponse({
    type: User,
    description: '업데이트 된 User 정보',
  })
  @UseGuards(AuthGuard('jwt'))
  updateUsersPassword(
    @Body('password') pwd: string,
    @CurUser() user: User,
  ): Promise<User> {
    return this.userService.updateUsersPassword(pwd, user);
  }
}
