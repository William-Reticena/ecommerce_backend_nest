import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'ecommerce',
  entities: [__dirname + '/../entities/*.entity.{js,ts}'],
  synchronize: true,
};
