import { Custumer } from './custumer.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Custumer])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
