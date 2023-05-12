import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/database/schemas/user.schema';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { Like, likeSchema } from 'src/database/schemas/like.schema';
import {
  CulturalEvent,
  culturalEventSchema,
} from 'src/database/schemas/culturalevent.schema';
import { CulturaleventModule } from 'src/culturalevent/culturalevent.module';
import { Model } from 'mongoose';

@Module({
  imports: [CulturaleventModule, AuthModule],
  controllers: [UserController],
  providers: [UserService, AuthService, MongooseModule],
})
export class UserModule {}
