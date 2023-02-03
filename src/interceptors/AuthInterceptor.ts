import { JwtService } from '@nestjs/jwt';
import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Inject,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthInterceptor implements NestInterceptor {
  constructor(@Inject(JwtService) private jwtService: JwtService) {}

  private validateToken(token: string): boolean {
    try {
      this.jwtService.verify(token);
    } catch (error) {
      return false;
    }
    return true;
  }

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException({
        message: 'Token not provided',
        statusCode: HttpStatus.UNAUTHORIZED,
        userMessage: 'Token não fornecido',
      });
    }

    if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
      const token = authHeader.split(' ')[1];
      const isValid = this.validateToken(token);

      if (!isValid) {
        throw new UnauthorizedException({
          message: 'Invalid token',
          statusCode: HttpStatus.UNAUTHORIZED,
          userMessage: 'Token inválido',
        });
      }
    }

    return next.handle();
  }
}
