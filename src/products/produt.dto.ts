import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsString()
  @IsOptional()
  readonly description?: string;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsNumber()
  @IsOptional()
  readonly price?: number;

  @IsString()
  @IsOptional()
  readonly description?: string;
}
