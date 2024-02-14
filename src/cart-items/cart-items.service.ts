import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CartItem } from '@prisma/client';

@Injectable()
export class CartItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CartItem[]> {
    return this.prisma.cartItem.findMany();
  }

  async findOne(itemId: number): Promise<CartItem | null> {
    return this.prisma.cartItem.findUnique({
      where: { item_id: itemId },
    });
  }

  async create(data: any): Promise<CartItem> {
    return this.prisma.cartItem.create({ data });
  }

  async update(itemId: number, data: any): Promise<CartItem> {
    return this.prisma.cartItem.update({
      where: { item_id: itemId },
      data,
    });
  }

  async remove(itemId: number): Promise<void> {
    await this.prisma.cartItem.delete({
      where: { item_id: itemId },
    });
  }
}
