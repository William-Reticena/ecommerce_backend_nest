import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class Custumer extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'integer', nullable: true })
  age?: number;

  @Column({ type: 'varchar', nullable: true })
  cpf?: string;

  @ManyToOne(() => Address, (address) => address.id)
  address_id: Address[];
}
