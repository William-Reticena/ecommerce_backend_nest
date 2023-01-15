import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserDto } from './dto/user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() userDto: UserDto): Promise<UserDto> {
    return this.authService.create(userDto);
  }

  @Post('login')
  login(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<AuthCredentialsDto> {
    return this.authService.login(authCredentialsDto);
  }
}
