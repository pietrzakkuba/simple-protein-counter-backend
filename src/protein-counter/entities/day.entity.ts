import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Day {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  gramsConsumed: number;

  @Column()
  gramsGoal: number;
}
