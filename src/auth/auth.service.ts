import { Custumer } from './custumer.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Custumer)
    private custumer: Repository<Custumer>,
  ) {}

  async create(userDto: UserDto): Promise<UserDto> {
    const user = this.custumer.create(userDto);

    await this.custumer.save(user);

    return user;
  }

  async login(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<AuthCredentialsDto> {
    console.log('authCredentialsDto', authCredentialsDto);

    const { email, password } = authCredentialsDto;

    const user = await this.custumer.findOne({ where: { email } });

    return user && user.password === password ? user : null;
  }
}
