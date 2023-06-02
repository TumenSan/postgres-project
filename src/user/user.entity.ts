import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  age: number;
}
