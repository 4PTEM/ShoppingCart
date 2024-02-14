import { IsNumber, IsOptional } from 'class-validator';

export class CreateCartItemDto {
  @IsNumber()
  readonly cart_id: number;

  @IsNumber()
  readonly product_id: number;

  @IsNumber()
  readonly quantity: number;
}

export class UpdateCartItemDto {
  @IsNumber()
  @IsOptional()
  readonly cart_id?: number;

  @IsNumber()
  @IsOptional()
  readonly product_id?: number;

  @IsNumber()
  @IsOptional()
  readonly quantity?: number;
}
