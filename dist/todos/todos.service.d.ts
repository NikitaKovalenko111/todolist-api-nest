import { Goal } from 'src/schemas/todo.schema';
import { Model, ObjectId } from 'mongoose';
import { BodyCreateTodoDto } from './dto/create-todo.dto';
import { BodyUpdateTodoDto } from './dto/update-todo.dto';
import { getTodosDtoType } from './dto/get-todo.dto';
export declare class TodosService {
    private readonly todoModel;
    constructor(todoModel: Model<Goal>);
    getTodoById(id: ObjectId): Promise<Goal>;
    getAllTodos(getTodosDto: getTodosDtoType): Promise<Goal[]>;
    postTodoService(bodyCreateTodoDto: BodyCreateTodoDto): Promise<Goal>;
    patchTodoService(bodyUpdateTodoDto: BodyUpdateTodoDto, id: ObjectId): Promise<Goal>;
    deleteTodoService(id: ObjectId): Promise<Goal>;
}
