import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustumerRepository } from './custumer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([CustumerRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
