import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Customer } from '../../entities/customer.entity';
import { AuthCredentialsDto } from '../../dto/auth-credentials.dto';
import { CustomerDto } from '../../dto/customer.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Customer)
    private customer: Repository<Customer>,
    private readonly jwtService: JwtService,
  ) {}

  private generateToken(user: string) {
    return this.jwtService.sign({ user }, { expiresIn: '1d' });
  }

  async encriptPassword(password: string): Promise<string> {
    const salt = 10;
    return await bcrypt.hash(password, salt);
  }

  async create(userDto: CustomerDto): Promise<CustomerDto> {
    const user = this.customer.create(userDto);

    const hash = await this.encriptPassword(user.password);
    user.password = hash;

    await this.customer.save(user);

    return user;
  }

  async login(authCredentialsDto: AuthCredentialsDto): Promise<{ token: string }> {
    const { email, password } = authCredentialsDto;

    const user = await this.customer.findOne({ where: { email } });

    if (!user && !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    return { token: this.generateToken(user.name) };
  }
}
