import { CustumerService } from './custumer.service';
import { AddressDto } from './dto/address.dto';
import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';

@Controller()
export class CustumerController {
  constructor(private readonly custumerService: CustumerService) {}

  @Post('address')
  async address(@Body() addressDto: AddressDto): Promise<AddressDto> {
    return this.custumerService.setAddress(addressDto);
  }

  @Get('address/:custumer_id')
  async getAddressesByCustomerId(
    @Param('custumer_id') id: number,
  ): Promise<AddressDto[]> {
    return this.custumerService.getAddressesByCustomerId(id);
  }

  @Patch('address/:id')
  async updateAddress(@Param('id') id: number, @Body() addressDto: AddressDto) {
    return this.custumerService.updateAddress(id, addressDto);
  }
}
