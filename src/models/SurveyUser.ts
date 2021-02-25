import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Survey } from './Survey'
import { User } from './User'

@Entity('surveys_users')
export class SurveyUser {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  user_id: number

  @Column()
  survey_id: number

  @Column()
  value: number

  @ManyToOne(()=> User)
  @JoinColumn({name: 'user_id'})
  user: User

  @ManyToOne(()=> Survey)
  @JoinColumn({name: 'survey_id'})
  survey: Survey

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}