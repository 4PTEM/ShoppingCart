import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartItemsModule } from './cart-items/cart-items.module';
import { ClientsModule } from './clients/clients.module';
import { PrismaService } from './prisma.service';
import { ProductsModule } from './products/products.module';
import { ShoppingCartsModule } from './shopping-carts/shopping-carts.module';

@Module({
  imports: [
    CartItemsModule,
    ClientsModule,
    ProductsModule,
    ShoppingCartsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
