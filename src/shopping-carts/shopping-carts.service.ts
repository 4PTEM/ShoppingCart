import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ShoppingCart } from '@prisma/client';

@Injectable()
export class ShoppingCartsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ShoppingCart[]> {
    return this.prisma.shoppingCart.findMany();
  }

  async findOne(cartId: number): Promise<ShoppingCart | null> {
    return this.prisma.shoppingCart.findUnique({
      where: { cart_id: cartId },
    });
  }

  async create(data: any): Promise<ShoppingCart> {
    return this.prisma.shoppingCart.create({ data });
  }

  async update(cartId: number, data: any): Promise<ShoppingCart> {
    return this.prisma.shoppingCart.update({
      where: { cart_id: cartId },
      data,
    });
  }

  async remove(cartId: number): Promise<void> {
    await this.prisma.shoppingCart.delete({
      where: { cart_id: cartId },
    });
  }
}
