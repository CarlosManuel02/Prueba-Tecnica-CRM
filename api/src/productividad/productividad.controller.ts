import { Controller, Get, Param } from '@nestjs/common';
import { ProductividadService } from './productividad.service';

@Controller('productividad')
export class ProductividadController {
  constructor(private readonly productividadService: ProductividadService) {}

  @Get('all')
  getProductividad() {
    return this.productividadService.getProductividad();
  }

  @Get(':ejecutivo')
  getProductividadPorEjecutivo(
    @Param('ejecutivo') ejecutivo: string
  ){
    return this.productividadService.getProductividadPorEjecutivo(ejecutivo);
  }
}
