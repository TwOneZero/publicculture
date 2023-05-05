import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/database/schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtAccessStrategy } from 'src/common/auth/jwt-access.strategy';
import { JwtRestoreAccessStrategy } from 'src/common/auth/jwt-restoreAccess.strategy';
import { JwtKakaoStrategy } from 'src/common/auth/jwt-social-kakao.strategy';
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
      }),
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    JwtAccessStrategy,
    JwtRestoreAccessStrategy,
    JwtKakaoStrategy,
  ],
  exports: [AuthService, JwtModule, JwtAccessStrategy, PassportModule],
})
export class AuthModule {}
