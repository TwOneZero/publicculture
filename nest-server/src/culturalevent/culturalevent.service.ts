import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { User } from 'src/user/schema/user.schema';
import { getFormatedTime } from 'src/common/utils/getCurrentTime';
import { CulturalEventRepository } from './repository/culturalevent.repository';
import { LikeRepository } from 'src/like/repository/like.repository';

@Injectable()
export class CulturaleventService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    private readonly eventRepository: CulturalEventRepository,
    private readonly likeReposiotory: LikeRepository,
  ) {}

  //문화행사 API 요청
  async fetchEvent() {
    const FETCH_URL = this.configService.get<string>('CULTURE_EVENT_URI');
    const SERVICE_KEY = this.configService.get<string>('CULTURE_SERVICE_KEY');

    let pathVariables = SERVICE_KEY;
    pathVariables += '/' + encodeURIComponent('json');
    pathVariables += '/' + encodeURIComponent('culturalEventInfo');
    pathVariables += '/' + encodeURIComponent('3001');
    pathVariables += '/' + encodeURIComponent('3450');
    const fullUrl = FETCH_URL + pathVariables;
    console.log(fullUrl);
    const request = this.httpService.get(fullUrl).pipe(
      catchError((err: AxiosError) => {
        console.log(err.response.data);
        throw 'Store Event Error';
      }),
    );

    const { data } = await firstValueFrom(request);

    return data;
  }
  // 문화 행사 DB 에 저장
  async storeAllEvents() {
    const data = await this.fetchEvent();

    await this.eventRepository.create(data);
    return 'Success with Storing All Events!';
  }

  // //모든 이벤트 가져오기
  // async getAllEvents(): Promise<CulturalEvent[]> {
  //   const events = await this.eventModel.find();
  //   console.log(events.length);

  //   return events;
  // }

  //랜덤한 20개 행사 리턴
  async getRandomEvents() {
    const limitrecords = 20;

    //랜덤한 수
    function getRandomArbitrary(min: number, max: number) {
      return Math.ceil(Math.random() * (max - min) + min);
    }
    //날짜 포맷 설정
    const d_t = getFormatedTime();
    //현재 날짜에서 종료일이 더 후인 행사 return
    const events = await this.eventRepository.find({ end_date: { $gte: d_t } });
    const randPick = getRandomArbitrary(1, events.length - limitrecords);
    //slicedPost 길이 => 랜덤수 ~ 랜덤수 + 20 (최대 : posts.length)
    return events.slice(randPick, randPick + limitrecords);
  }

  //좋아요 한 post
  async getFavEvents(user: User) {
    const events = await this.likeReposiotory.findAll().populate('event');
    const myEvents = events.filter((e) => String(e.user) === user._id);

    return myEvents;
  }

  //검색 찾기
  async getEventsBySearch(search: string) {
    const events = await this.eventRepository.searchEvents(search);
    return events;
  }

  //행사 정렬
  async getEventsSorted(search: string, mode: string) {
    const events = this.eventRepository.searchEvents(search);
    return await events.sort({ [mode]: -1 }).exec();
  }

  async getEventsDetails(id: string) {
    return await this.eventRepository.findOneById(id);
  }
}
