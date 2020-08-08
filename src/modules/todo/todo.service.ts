import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Todo } from './entity/Todo'
import { TodoDto } from './dto'

@Injectable()
export class TodoService {

  constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) {}

  async findAll(): Promise<TodoDto[]> {
    const todos = await this.todoRepository.find({})
    return todos
  }

  async findOne(id: number): Promise<TodoDto> {
    const todo = await this.todoRepository.findOne(id)
    return todo 
  }

  async insertTodo(todo: TodoDto): Promise<number> {
    const inserted = await this.todoRepository.insert(todo)
    return inserted.identifiers[0].id
  }
} 