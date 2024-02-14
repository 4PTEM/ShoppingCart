import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CreateCartItemDto, UpdateCartItemDto } from './cart-item.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cart-items')
@Controller('cart-items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Get()
  findAll() {
    return this.cartItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemsService.findOne(+id);
  }

  @Post()
  create(@Body() data: CreateCartItemDto) {
    return this.cartItemsService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateCartItemDto) {
    return this.cartItemsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartItemsService.remove(+id);
  }
}
