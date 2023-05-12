import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import {
  CulturalEvent,
  CulturalEventDocument,
} from 'src/database/schemas/culturalevent.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like, LikeDocument } from 'src/database/schemas/like.schema';
import { User } from 'src/database/schemas/user.schema';
import { getFormatedTime } from 'src/common/utils/getCurrentTime';
import { Cipher } from 'crypto';
import { searchEventsFunc } from './func/searchEventsFunc';

@Injectable()
export class CulturaleventService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    @InjectModel(CulturalEvent.name)
    private eventModel: Model<CulturalEventDocument>,
    @InjectModel(Like.name)
    private likeModel: Model<LikeDocument>,
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

    try {
      data.culturalEventInfo.row.forEach(async (event) => {
        const ev = new this.eventModel({
          codename: event.CODENAME,
          guname: event.GUNAME,
          title: event.TITLE,
          date: event.DATE,
          place: event.PLACE,
          org_name: event.ORG_NAME,
          use_trgt: event.USE_TRGT,
          use_fee: event.USE_FEE,
          player: event.PLAYER,
          program: event.PROGRAM,
          etc_desc: event.ETC_DESC,
          org_link: event.ORG_LINK,
          main_img: event.MAIN_IMG,
          rgstdate: event.RGSTDATE,
          ticket: event.TICKET,
          strtdate: event.STRTDATE,
          end_date: event.END_DATE,
          themecode: event.THEMECODE,
        });
        await ev.save();
      });
    } catch (error) {
      throw new Error(error);
    }
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
    const events = await this.eventModel.find({ end_date: { $gte: d_t } });
    const randPick = getRandomArbitrary(1, events.length - limitrecords);
    //slicedPost 길이 => 랜덤수 ~ 랜덤수 + 20 (최대 : posts.length)
    return events.slice(randPick, randPick + limitrecords);
  }

  //좋아요 한 post
  async getFavPost(user: User) {
    const events = await this.likeModel.find().populate('event');
    const myEvents = events.filter((e) => String(e.user) === user._id);

    return myEvents;
  }

  //검색 찾기
  async getEventsBySearch(search: string) {
    const events = await searchEventsFunc(search, this.eventModel);
    return events;
  }

  //행사 정렬
  async getEventsSorted(search: string, mode: string) {
    const events = searchEventsFunc(search, this.eventModel);
    return await events.sort({ [mode]: -1 }).exec();
  }

  async getEventsDetails(id: string) {
    return await this.eventModel.findById(id).exec();
  }
}
