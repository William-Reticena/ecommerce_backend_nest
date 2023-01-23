import { Address } from '../custumer/address.entity';
import { Custumer } from '../custumer/custumer.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Custumer, Address])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
