import { Body, Controller, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from '../../dto/auth-credentials.dto';
import { CustomerDto } from '../../dto/customer.dto';
import { ResponseDTO } from '../../dto/response.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async create(@Body() userDto: CustomerDto): Promise<ResponseDTO> {
    const result = await this.authService.create(userDto);

    return new ResponseDTO(result, 'User created successfully', 'Usuário criado com sucesso', HttpStatus.CREATED);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() authCredentialsDto: AuthCredentialsDto): Promise<ResponseDTO> {
    const result = await this.authService.login(authCredentialsDto);

    return new ResponseDTO(result, 'Login successful', 'Logado com sucesso', HttpStatus.OK);
  }
}
