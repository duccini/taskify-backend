import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';
import { Request } from 'express';

interface AuthenticatedRequest extends Request {
  user: User;
}

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
    return request.user;
  },
);
