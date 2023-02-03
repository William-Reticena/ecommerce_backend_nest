import { Customer } from './customer.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('credit_card')
export class CreditCard extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar' })
  expiration_date: string;

  @Column({ type: 'varchar' })
  holder_name: string;

  @Column({ type: 'varchar' })
  card_number: string;

  @Column({ type: 'boolean', default: false })
  primary_card: boolean;

  @ManyToOne(() => Customer, (customer) => customer.creditCards)
  customer: Customer;
}
