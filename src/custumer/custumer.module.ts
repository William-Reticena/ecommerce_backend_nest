import { Address } from './address.entity';
import { Custumer } from './custumer.entity';
import { CustumerService } from './custumer.service';
import { CustumerController } from './custumer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Custumer, Address])],
  controllers: [CustumerController],
  providers: [CustumerService],
})
export class CustumerModule {}
