import { Module } from '@nestjs/common';
import { CulturaleventService } from './culturalevent.service';
import { CulturaleventController } from './culturalevent.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CulturalEvent,
  culturalEventSchema,
} from 'src/culturalevent/schema/culturalevent.schema';
import { LikeModule } from 'src/like/like.module';
import { CulturalEventRepository } from './repository/culturalevent.repository';
import { LikeRepository } from 'src/like/repository/like.repository';

@Module({
  imports: [
    HttpModule,
    LikeModule,
    MongooseModule.forFeature([
      { name: CulturalEvent.name, schema: culturalEventSchema },
    ]),
  ],
  controllers: [CulturaleventController],
  providers: [
    CulturaleventService,
    ConfigService,
    CulturalEventRepository,
    LikeRepository,
  ],
  exports: [MongooseModule],
})
export class CulturaleventModule {}
