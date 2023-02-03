import { AuthInterceptor } from '../../interceptors/AuthInterceptor';
import { ResponseDTO } from '../../dto/response.dto';
import { AddressDto, AddressPatchDto } from '../../dto/address.dto';
import { Body, Controller, Get, Post, Param, Patch, UseInterceptors, HttpStatus } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('address')
export class CustomerController {
  constructor(private readonly custumerService: CustomerService) {}

  @Post()
  @UseInterceptors(AuthInterceptor)
  async address(@Body() addressDto: AddressDto): Promise<ResponseDTO> {
    const result = await this.custumerService.setAddress(addressDto);

    return new ResponseDTO(result, 'Address created successfully', 'Endereço criado com sucesso', HttpStatus.CREATED);
  }

  @Get(':custumer_id')
  @UseInterceptors(AuthInterceptor)
  async getAddressesByCustomerId(@Param('custumer_id') id: number): Promise<ResponseDTO> {
    const result = await this.custumerService.getAddressesByCustomerId(id);

    return new ResponseDTO(result, 'Addresses found', 'Endereços encontrados', HttpStatus.OK);
  }

  @Patch(':custumer_id')
  @UseInterceptors(AuthInterceptor)
  async updateAddress(@Param('custumer_id') id: number, @Body() addressPatchDto: AddressPatchDto): Promise<ResponseDTO> {
    const result = await this.custumerService.updateAddress(id, addressPatchDto);

    return new ResponseDTO(result, 'Address updated', 'Endereço atualizado', HttpStatus.OK);
  }
}
