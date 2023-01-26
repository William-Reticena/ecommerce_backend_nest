import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AuthService } from './../services/auth/auth.service';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthInterceptor implements NestInterceptor {
  constructor(
    private readonly authService: Repository<AuthService>,
    private jwtService: JwtService,
  ) {}

  private validateToken(token: string) {
    console.log('validateToken', token);

    // const decoded = this.jwtService.decode(token);
    console.log(this.jwtService.decode(token));

    // console.log(decoded);

    return 'decoded';
  }

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    console.log(authHeader);

    if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
      const token = authHeader.split(' ')[1];
      const user = this.validateToken(token);
      request.user = user;
    }

    return next.handle();
  }
}
