import { AddressDto } from './dto/address.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserDto } from './dto/user.dto';
import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
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

  @Post('address')
  async address(@Body() addressDto: AddressDto): Promise<AddressDto> {
    return this.authService.setAddress(addressDto);
  }

  @Get('address/:custumer_id')
  async getAddressesByCustomerId(
    @Param('custumer_id') id: number,
  ): Promise<AddressDto[]> {
    return this.authService.getAddressesByCustomerId(id);
  }

  @Patch('address/:id')
  async updateAddress(@Param('id') id: number, @Body() addressDto: AddressDto) {
    return this.authService.updateAddress(id, addressDto);
  }
}
