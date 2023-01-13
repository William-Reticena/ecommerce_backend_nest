import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post('register')
  createUser(@Body() info: any): Promise<any> {
    console.log(info);

    return this.authService.createUser(info);
  }
}
