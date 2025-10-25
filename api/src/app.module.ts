import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductividadModule } from './productividad/productividad.module';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: process.env.ORACLE_HOST,
      port: Number.parseInt(process.env.ORACLE_PORT, 10) || 1521,
      username: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      serviceName: process.env.ORACLE_SERVICE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductividadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
