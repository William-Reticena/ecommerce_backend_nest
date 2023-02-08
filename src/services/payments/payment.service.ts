import { CreditCardDto } from './../../dto/credit-card.dto';
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

  async setCreditCard(creditCardDto: CreditCardDto): Promise<CreditCardDto> {
    const creditCardEntity = this.creditCard.create(creditCardDto);

    return await this.creditCard.save(creditCardEntity);
  }
}
