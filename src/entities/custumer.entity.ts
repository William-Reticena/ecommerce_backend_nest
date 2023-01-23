import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
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

  @OneToMany(() => Address, (address) => address.custumer)
  addresses: Address[];
}
