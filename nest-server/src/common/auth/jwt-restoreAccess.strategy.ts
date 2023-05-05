import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { log } from 'console';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtRestoreAccessStrategy extends PassportStrategy(
  Strategy,
  'refresh',
) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie;
        console.log(cookie);

        const cookieString: string[] = cookie.split(';');
        let refreshToken;
        cookieString.forEach((el) => {
          if (el.includes('refreshToken')) {
            refreshToken = el.replace('refreshToken=', '');
          }
        });

        return refreshToken;
      },
      secretOrKey: configService.get<string>('JWT_REFRESH_SECRET'),
    });
  }

  async validate(payload: any) {
    console.log(payload);
    return {
      email: payload.email,
      _id: payload.sub,
    };
  }
}
