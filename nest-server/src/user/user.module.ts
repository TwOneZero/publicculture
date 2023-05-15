import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/user/schema/user.schema';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { Like, likeSchema } from 'src/like/schema/like.schema';
import {
  CulturalEvent,
  culturalEventSchema,
} from 'src/culturalevent/schema/culturalevent.schema';
import { CulturaleventModule } from 'src/culturalevent/culturalevent.module';
import { Model } from 'mongoose';
import { UserRepository } from './repository/user.repository';
import { CulturalEventRepository } from 'src/culturalevent/repository/culturalevent.repository';
import { LikeRepository } from 'src/like/repository/like.repository';
import { LikeModule } from 'src/like/like.module';

@Module({
  imports: [CulturaleventModule, AuthModule, LikeModule],
  controllers: [UserController],
  providers: [
    UserService,
    AuthService,
    MongooseModule,
    UserRepository,
    CulturalEventRepository,
    LikeRepository,
  ],
})
export class UserModule {}
