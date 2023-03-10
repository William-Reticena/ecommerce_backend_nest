import { Customer } from '../../entities/customer.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), JwtModule.register({ secret: 'secret' })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
