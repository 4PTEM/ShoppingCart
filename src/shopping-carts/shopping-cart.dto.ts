import { IsNumber, IsOptional } from 'class-validator';

export class CreateShoppingCartDto {
  @IsNumber()
  readonly client_id: number;

  @IsOptional()
  readonly creation_date?: Date;
}

export class UpdateShoppingCartDto {
  @IsNumber()
  @IsOptional()
  readonly client_id?: number;

  @IsOptional()
  readonly creation_date?: Date;
}
