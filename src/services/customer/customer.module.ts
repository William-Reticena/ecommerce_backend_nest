import { JwtModule } from '@nestjs/jwt';
import { Address } from '../../entities/address.entity';
import { Customer } from '../../entities/customer.entity';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Address]), JwtModule.register({ secret: 'secret' })],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
