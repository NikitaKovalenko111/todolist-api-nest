import { Goal } from 'src/schemas/todo.schema';
import { Model, ObjectId } from 'mongoose';
import { BodyCreateTodoDto } from './dto/create-todo.dto';
import { BodyUpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    private readonly todoModel;
    constructor(todoModel: Model<Goal>);
    getAllTodos(target?: string): Promise<Goal[]>;
    getTodoById(id: ObjectId): Promise<Goal>;
    postTodoService(bodyCreateTodoDto: BodyCreateTodoDto): Promise<Goal>;
    patchTodoService(bodyUpdateTodoDto: BodyUpdateTodoDto, id: ObjectId): Promise<Goal>;
    deleteTodoService(id: ObjectId): Promise<Goal>;
}
