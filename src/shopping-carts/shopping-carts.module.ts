import { Module } from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';
import { ShoppingCartsController } from './shopping-carts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ShoppingCartsService, PrismaService],
  controllers: [ShoppingCartsController],
})
export class ShoppingCartsModule {}
