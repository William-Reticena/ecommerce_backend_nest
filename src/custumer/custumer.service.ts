import { Address } from './address.entity';
import { AddressDto } from './dto/address.dto';
import { Custumer } from './custumer.entity';
import { Injectable } from '@nestjs/common';
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

    // const addressesTeste = await this.address.find({
    //   where: { custumer: { id: 1 } },
    // });

    // console.log(addressesTeste);

    address.custumer = user;

    await this.address.save(address);
    // await this.custumer.save({ ...user, addresses: [address] });

    // await this.custumer.update({ id: 1 }, { addresses: [address] });

    // user.save({ ...user, addresses: [address] });

    // await this.a

    console.log(user);

    return address;
  }

  async getAddressesByCustomerId(id: number): Promise<AddressDto[]> {
    return await this.address.find({ where: { custumer: { id } } });
  }

  async updateAddress(id: number, addressDto: AddressDto) {
    return await this.address.update({ id }, addressDto);
  }
}
