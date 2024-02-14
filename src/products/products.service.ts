import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findOne(productId: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { product_id: productId },
    });
  }

  async create(data: any): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async update(productId: number, data: any): Promise<Product> {
    return this.prisma.product.update({
      where: { product_id: productId },
      data,
    });
  }

  async remove(productId: number): Promise<void> {
    await this.prisma.product.delete({
      where: { product_id: productId },
    });
  }
}
