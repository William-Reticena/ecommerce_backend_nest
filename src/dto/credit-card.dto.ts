import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreditCardDto {
  @IsNotEmpty()
  @IsString()
  expiration_date: string;

  @IsNotEmpty()
  @IsString()
  holder_name: string;

  @IsNotEmpty()
  @IsString()
  card_number: string;

  @IsBoolean()
  @IsOptional()
  primary_card: boolean;
}
