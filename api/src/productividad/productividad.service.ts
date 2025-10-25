import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductividadService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  async getProductividad() {
    const query = `
      SELECT * FROM VW_PRODUCTIVIDAD_EJECUTIVOS
    `;
    try {
      return await this.dataSource.query(query);
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  async getProductividadPorEjecutivo(ejecutivo: string) {
    try {
      const result = await this.dataSource
        .createQueryBuilder()
        .select('*')
        .from('VW_PRODUCTIVIDAD_EJECUTIVOS', null)
        .where('EJECUTIVO LIKE :ejecutivo', { ejecutivo: `${ejecutivo}%` })
        .getRawMany();

      return result;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }
}
