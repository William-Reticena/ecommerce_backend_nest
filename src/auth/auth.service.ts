import { CustumerRepository } from './custumer.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(CustumerRepository)
    private custumerRepository: CustumerRepository,
  ) {}
  // getHello(): string {
  //   return 'Hello World!';
  // }

  async createUser(info: any): Promise<any> {
    const user = this.custumerRepository.createUser(info);
    console.log(user);

    // await this.custumerRepository.save(user);

    return user;
  }
}
