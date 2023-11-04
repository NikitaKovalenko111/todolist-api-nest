import { Goal } from 'src/schemas/todo.schema';
import { TodosService } from './todos.service';
import { ObjectId } from 'mongoose';
import { BodyCreateTodoDto } from './dto/create-todo.dto';
import { BodyUpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    getAllTodos(target: string): Promise<Goal[]>;
    getTodoById(id: ObjectId): Promise<Goal>;
    postTodo(bodyCreateTodoDto: BodyCreateTodoDto): Promise<Goal>;
    patchTodoById(bodyUpdateTodoDto: BodyUpdateTodoDto, id: ObjectId): Promise<Goal>;
    deleteTodoById(id: ObjectId): Promise<Goal>;
}
