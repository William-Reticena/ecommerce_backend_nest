import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from '../../dto/auth-credentials.dto';
import { CustumerDto } from '../../dto/custumer.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() userDto: CustumerDto): Promise<CustumerDto> {
    return this.authService.create(userDto);
  }

  @Post('login')
  login(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<AuthCredentialsDto> {
    return this.authService.login(authCredentialsDto);
  }
}
