import { Module } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CartItemsController } from './cart-items.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CartItemsService, PrismaService],
  controllers: [CartItemsController],
})
export class CartItemsModule {}
