import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('address')
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar' })
  city_name: string;

  @Column({ type: 'varchar' })
  country_name: string;

  @Column({ type: 'integer' })
  house_number: number;

  @Column({ type: 'varchar' })
  neighborhood: string;

  @Column({ type: 'boolean', default: false })
  primary_address?: boolean;

  @Column({ type: 'varchar' })
  state_name: string;

  @Column({ type: 'varchar' })
  street_name: string;

  @Column({ type: 'varchar' })
  zip_code: string;

  @ManyToOne(() => Customer, (customer) => customer.addresses)
  customer: Customer;
}
