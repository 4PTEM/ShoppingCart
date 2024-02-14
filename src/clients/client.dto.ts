import { IsString, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsString()
  readonly first_name: string;

  @IsString()
  readonly last_name: string;

  @IsString()
  readonly email: string;

  @IsString()
  @IsOptional()
  readonly phone_number?: string;
}

export class UpdateClientDto {
  @IsString()
  @IsOptional()
  readonly first_name?: string;

  @IsString()
  @IsOptional()
  readonly last_name?: string;

  @IsString()
  @IsOptional()
  readonly email?: string;

  @IsString()
  @IsOptional()
  readonly phone_number?: string;
}
