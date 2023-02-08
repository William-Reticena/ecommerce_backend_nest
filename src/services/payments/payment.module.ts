import { Customer } from './../../entities/customer.entity';
import { CreditCard } from './../../entities/creditCard.entity';
import { JwtModule } from '@nestjs/jwt';
import { PaymentService } from '../payments/payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([CreditCard, Customer]), JwtModule.register({ secret: 'secret' })],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
