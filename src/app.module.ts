import { CustumerModule } from './services/custumer/custumer.module';
import { AuthModule } from './services/auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, CustumerModule],
})
export class AppModule {}
