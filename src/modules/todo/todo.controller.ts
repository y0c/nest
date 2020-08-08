import { Controller, Get, Post, Body } from '@nestjs/common'
import { TodoService } from './todo.service'
import { TodoDto } from './dto'

@Controller('/todo')
export class TodoController {

  constructor(private todoService: TodoService) { }

  @Get()
  findAllTodos(): Promise<TodoDto[]> {
    return this.todoService.findAll()
  }


  @Get()
  findOneTodo(id: number): Promise<TodoDto> {
    return this.todoService.findOne(id)
  }

  @Post()
  insertTodo(@Body() todoDto: TodoDto) {
    return this.todoService.insertTodo(todoDto)
  }
}