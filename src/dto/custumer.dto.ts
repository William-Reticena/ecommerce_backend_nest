import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CustumerDto {
  @IsNumber()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  cpf?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
