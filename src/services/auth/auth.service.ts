import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Custumer } from '../../entities/custumer.entity';
import { AuthCredentialsDto } from '../../dto/auth-credentials.dto';
import { CustumerDto } from '../../dto/custumer.dto';

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

  async create(userDto: CustumerDto): Promise<CustumerDto> {
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
}
