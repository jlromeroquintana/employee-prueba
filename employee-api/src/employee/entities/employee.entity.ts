import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn() id!: number;
  @Column() name!: string;
  @Column({ length: 8 }) document_number!: string;
  @Column('decimal') salary!: number;
  @Column('int') age!: number;
  @Column() profile!: string;
  @Column('date') admission_date!: Date;
}
