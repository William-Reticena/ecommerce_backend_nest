import { AddressDto } from './dto/address.dto';
import { Custumer } from './custumer.entity';
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

  async address(addressDto: AddressDto): Promise<AddressDto> {
    const address = this.address.create(addressDto);

    await this.address.save(address);

    return address;
  }
}
