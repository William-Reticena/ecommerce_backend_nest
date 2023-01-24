import { ResponseDTO } from './../../dto/response.dto';
import { AddressPatchDto } from './../../dto/address.dto';
import { Address } from '../../entities/address.entity';
import { AddressDto } from '../../dto/address.dto';
import { Custumer } from '../../entities/custumer.entity';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustumerService {
  constructor(
    @InjectRepository(Custumer)
    private custumer: Repository<Custumer>,
    @InjectRepository(Address) private address: Repository<Address>,
  ) {}

  async setAddress(addressDto: AddressDto): Promise<AddressDto> {
    const user = await this.custumer.findOne({ where: { id: 1 } });
    const address = this.address.create(addressDto);

    address.custumer = user;

    await this.address.save(address);

    return address;
  }

  async getAddressesByCustomerId(id: number): Promise<ResponseDTO<Address[]>> {
    const addresses = await this.address.find({ where: { custumer: { id } } });

    return new ResponseDTO(
      addresses,
      'Addresses found',
      'Endereços encontrados',
      HttpStatus.OK,
    );
  }

  async updateAddress(id: number, addressPatchDto: AddressPatchDto) {
    await this.address.update({ id }, addressPatchDto);
  }
}
