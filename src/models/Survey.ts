import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('surveys')
export class Survey {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}