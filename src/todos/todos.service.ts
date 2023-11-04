import { Injectable} from '@nestjs/common';
import { Goal } from 'src/schemas/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { BodyCreateTodoDto, CreateTodoDto } from './dto/create-todo.dto';
import { BodyUpdateTodoDto, UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
    constructor(@InjectModel(Goal.name) private readonly todoModel: Model<Goal>) {}

    // GET

    async getAllTodos(target?: string): Promise<Goal[]> {
        return await this.todoModel.find({ target: {$regex: target} }).exec()
    }

    async getTodoById(id: ObjectId): Promise<Goal> {
        return await this.todoModel.findById(id)
    }

    // POST

    async postTodoService(bodyCreateTodoDto: BodyCreateTodoDto): Promise<Goal> {
        let createTodoDto: CreateTodoDto = {
            target: bodyCreateTodoDto.target,
            isCompleted: bodyCreateTodoDto.isCompleted,
            date: new Date(),
            dateIsCompleted: bodyCreateTodoDto.isCompleted ? new Date() : undefined
        }

        return await this.todoModel.create(createTodoDto)
    }

    // PATCH

    async patchTodoService(bodyUpdateTodoDto: BodyUpdateTodoDto, id: ObjectId): Promise<Goal> {
        let updateTodoDto: UpdateTodoDto = {
            isCompleted: bodyUpdateTodoDto.isCompleted,
            dateIsCompleted: bodyUpdateTodoDto.isCompleted ? new Date() : undefined
        }

        return await this.todoModel.findByIdAndUpdate(id, updateTodoDto)
    }

    // DELETE

    async deleteTodoService(id: ObjectId): Promise<Goal> {
        return await this.todoModel.findByIdAndDelete(id)
    }
}
