import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Todo {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @Column()
  title: string

  @Column()
  done: boolean

  
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updateAt: Date

}