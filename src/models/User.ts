import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}