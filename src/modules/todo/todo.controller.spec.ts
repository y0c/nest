import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { createConnection } from 'typeorm'
import { Todo } from './entity/Todo'
import { TodoDto } from './dto'

describe('TodoController', () => {
  let todoController: TodoController;
  let app;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "test",
        "database": "test",
        "synchronize": true,
        "logging": true,
        "entities": [
          "./entity/*.ts"
        ],
      }), TypeOrmModule.forFeature([Todo])],
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    const app = module.createNestApplication()
    await app.init()
  });

    it('insert todo test"', async () => {
      todoController = app.get<TodoController>(TodoController);
      // given
      const todo = new TodoDto()
      todo.title = 'erwefwef'
      todo.content = 'erwer'
      todo.done = false

      // when 
      const id = await todoController.insertTodo(todo)

      // then
      const inserted = await todoController.findOneTodo(id)
      expect(inserted.title).toBe(todo.title)
    });
});
