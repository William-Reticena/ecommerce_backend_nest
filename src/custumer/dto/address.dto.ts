export class AddressDto {
  id: number;
  city_name: string;
  country_name: string;
  house_number: number;
  neighborhood: string;
  primary_address?: boolean;
  state_name: string;
  street_name: string;
  zip_code: string;
}

export class AddressPatchDto extends AddressDto {
  id: number;
}
