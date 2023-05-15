import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {
  CulturalEvent,
  CulturalEventDocument,
} from 'src/culturalevent/schema/culturalevent.schema';
import { searchEventsFunc } from '../func/searchEventsFunc';

@Injectable()
export class CulturalEventRepository {
  constructor(
    @InjectModel(CulturalEvent.name)
    private eventModel: Model<CulturalEventDocument>,
  ) {}

  async create(data) {
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
  }

  //서비스 -> DB 로 접근하는 로직 옮기기
  //모든 행사 반환
  findAll(): Promise<CulturalEventDocument[]> {
    return this.eventModel.find();
  }

  //ID 로 행사 찾기
  findOneById(id: string): Promise<CulturalEventDocument> {
    return this.eventModel.findById(id);
  }

  //행사 정보 업데이트
  findByIdAndUpdate(
    id: string,
    query: mongoose.UpdateQuery<CulturalEventDocument>,
    option: mongoose.QueryOptions<CulturalEventDocument>,
  ): Promise<CulturalEventDocument> {
    return this.eventModel.findByIdAndUpdate(id, query, option);
  }

  find(query: mongoose.FilterQuery<CulturalEventDocument>) {
    return this.eventModel.find(query);
  }

  searchEvents(search: string) {
    return searchEventsFunc(search, this.eventModel);
  }
}
