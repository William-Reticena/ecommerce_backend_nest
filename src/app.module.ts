import { CustomerModule } from './services/customer/customer.module';
import { AuthModule } from './services/auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, CustomerModule],
})
export class AppModule {}
