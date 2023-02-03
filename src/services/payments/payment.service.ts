import { CreditCard } from './../../entities/creditCard.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(CreditCard)
    private creditCard: Repository<CreditCard>,
  ) {}

  // async addCreditCard(creditCard: CreditCard): Promise<CreditCard> {
}
