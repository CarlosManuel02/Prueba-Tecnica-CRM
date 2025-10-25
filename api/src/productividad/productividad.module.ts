import { Module } from '@nestjs/common';
import { ProductividadService } from './productividad.service';
import { ProductividadController } from './productividad.controller';

@Module({
  controllers: [ProductividadController],
  providers: [ProductividadService],
})
export class ProductividadModule {}
