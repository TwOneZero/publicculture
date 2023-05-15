import { Controller, Get, UseGuards, Query, Param } from '@nestjs/common';
import { CulturaleventService } from './culturalevent.service';
import { AuthGuard } from '@nestjs/passport';
import { CurUser } from 'src/common/decorators/user.decorator';
import { User } from 'src/user/schema/user.schema';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CulturalEvent } from 'src/culturalevent/schema/culturalevent.schema';

@Controller('culture/events')
@ApiTags('행사 API')
export class CulturaleventController {
  constructor(private readonly culturaleventService: CulturaleventService) {}

  // 관리자만 쓸 수 있게 가드를 걸어야함
  // @Get('/store')
  // // @UseGuards('admin')
  // storeAllEvents() {
  //   return this.culturaleventService.storeAllEvents();
  // }

  // @Get()
  // getAllEvents() {
  //   console.log('ddd');

  //   return this.culturaleventService.getAllEvents();
  // }

  @Get('')
  @ApiOperation({ summary: '이벤트 검색' })
  @ApiCreatedResponse({
    description: '카테고리 or 검색어',
    type: CulturalEvent,
    isArray: true,
  })
  getEventsBySearch(@Query('search') search: string) {
    return this.culturaleventService.getEventsBySearch(search);
  }

  @Get('random')
  @ApiOperation({ summary: '랜덤 행사' })
  @ApiCreatedResponse({
    description: '랜덤한 행사 20개',
    type: CulturalEvent,
    isArray: true,
  })
  getRandomEvents() {
    return this.culturaleventService.getRandomEvents();
  }

  @Get('/sorted')
  @ApiOperation({ summary: '행사 정렬' })
  @ApiCreatedResponse({
    description: '카테고리에 해당하는 정렬된 행사',
    type: CulturalEvent,
    isArray: true,
  })
  getEventsSorted(
    @Query('search') search: string,
    @Query('mode') mode: string,
  ) {
    return this.culturaleventService.getEventsSorted(search, mode);
  }

  @Get('/liked')
  @ApiBearerAuth('accessToken')
  @ApiOperation({ summary: '행사 좋아요' })
  @ApiCreatedResponse({
    description: '유저가 좋아요 누른 행사',
    type: CulturalEvent,
    isArray: true,
  })
  @UseGuards(AuthGuard('jwt'))
  getFavEvents(@CurUser() user: User) {
    return this.culturaleventService.getFavEvents(user);
  }

  @Get(':id')
  @ApiOperation({ summary: '행사 세부 내용' })
  @ApiCreatedResponse({
    description: '해당 행사 정보',
    type: CulturalEvent,
    isArray: true,
  })
  getEventDetails(@Param('id') id: string) {
    return this.culturaleventService.getEventsDetails(id);
  }
}
