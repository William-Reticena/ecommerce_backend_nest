import { AddressPatchDto } from '../../dto/address.dto';
import { Address } from '../../entities/address.entity';
import { AddressDto } from '../../dto/address.dto';
import { Customer } from '../../entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private custumer: Repository<Customer>,
    @InjectRepository(Address) private address: Repository<Address>,
  ) {}

  async setAddress(addressDto: AddressDto): Promise<AddressDto> {
    const user = await this.custumer.findOne({ where: { id: 1 } });
    const address = this.address.create(addressDto);

    address.customer = user;

    await this.address.save(address);

    return address;
  }

  async getAddressesByCustomerId(id: number): Promise<Address[]> {
    const addresses = await this.address.find({ where: { customer: { id } } });

    return addresses;
  }

  async updateAddress(id: number, addressPatchDto: AddressPatchDto) {
    await this.address.update({ id }, addressPatchDto);
  }
}
