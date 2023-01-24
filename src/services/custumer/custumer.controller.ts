import { ResponseDTO } from './../../dto/response.dto';
import { AddressPatchDto } from './../../dto/address.dto';
import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { CustumerService } from './custumer.service';
import { AddressDto } from '../../dto/address.dto';

@Controller('address')
export class CustumerController {
  constructor(private readonly custumerService: CustumerService) {}

  @Post()
  async address(@Body() addressDto: AddressDto): Promise<AddressDto> {
    return this.custumerService.setAddress(addressDto);
  }

  @Get(':custumer_id')
  async getAddressesByCustomerId(
    @Param('custumer_id') id: number,
  ): Promise<ResponseDTO<AddressDto[]>> {
    return this.custumerService.getAddressesByCustomerId(id);
  }

  @Patch(':custumer_id')
  async updateAddress(
    @Param('custumer_id') id: number,
    @Body() addressPatchDto: AddressPatchDto,
  ) {
    return this.custumerService.updateAddress(id, addressPatchDto);
  }
}
