import { Module } from '@nestjs/common';
import { CulturaleventService } from './culturalevent.service';
import { CulturaleventController } from './culturalevent.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CulturalEvent,
  culturalEventSchema,
} from 'src/database/schemas/culturalevent.schema';
import { UserModule } from 'src/user/user.module';
import { Like, likeSchema } from 'src/database/schemas/like.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: CulturalEvent.name, schema: culturalEventSchema },
      { name: Like.name, schema: likeSchema },
    ]),
  ],
  controllers: [CulturaleventController],
  providers: [CulturaleventService, ConfigService],
  exports: [MongooseModule],
})
export class CulturaleventModule {}
