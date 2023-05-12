import { ArgumentsHost, createParamDecorator } from '@nestjs/common';
import { Request, Response } from 'express';

export const GetContext = createParamDecorator(
  (data: unknown, host: ArgumentsHost) => {
    const ctx = host.switchToHttp();
    const request: Request = ctx.getRequest();
    const response: Response = ctx.getResponse();
    return {
      req: request,
      res: response,
    };
  },
);
