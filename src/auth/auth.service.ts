import { Address } from '../custumer/address.entity';
import { AddressDto } from './dto/address.dto';
import { Custumer } from '../custumer/custumer.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Custumer)
    private custumer: Repository<Custumer>,
    @InjectRepository(Address) private address: Repository<Address>,
  ) {}

  encriptPassword(password: string): string {
    const salt = 10;
    return bcrypt.hashSync(password, salt);
  }

  async create(userDto: UserDto): Promise<UserDto> {
    const user = this.custumer.create(userDto);

    user.password = this.encriptPassword(user.password);

    await this.custumer.save(user);

    return user;
  }

  async login(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<AuthCredentialsDto> {
    const { email, password } = authCredentialsDto;

    const user = await this.custumer.findOne({ where: { email } });

    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }

    return null;
  }

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
