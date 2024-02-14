import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';
import {
  CreateShoppingCartDto,
  UpdateShoppingCartDto,
} from './shopping-cart.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shopping-carts')
@Controller('shopping-carts')
export class ShoppingCartsController {
  constructor(private readonly shoppingCartsService: ShoppingCartsService) {}

  @Get()
  findAll() {
    return this.shoppingCartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingCartsService.findOne(+id);
  }

  @Post()
  create(@Body() data: CreateShoppingCartDto) {
    return this.shoppingCartsService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateShoppingCartDto) {
    return this.shoppingCartsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingCartsService.remove(+id);
  }
}
