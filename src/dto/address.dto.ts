import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class AddressDto {
  @IsNotEmpty()
  @IsString()
  city_name: string;

  @IsNotEmpty()
  @IsString()
  country_name: string;

  @IsNotEmpty()
  @IsNumber()
  house_number: number;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsBoolean()
  @IsOptional()
  primary_address?: boolean;

  @IsNotEmpty()
  @IsString()
  state_name: string;

  @IsNotEmpty()
  @IsString()
  street_name: string;

  @IsNotEmpty()
  @IsString()
  zip_code: string;
}

export class AddressPatchDto implements Partial<AddressDto> {}
