"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const todo_schema_1 = require("../schemas/todo.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TodosService = class TodosService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async getTodoById(id) {
        return await this.todoModel.findById(id);
    }
    async getAllTodos(getTodosDto) {
        return await this.todoModel.find({ target: { $regex: getTodosDto.target }, authorId: getTodosDto.authorId }).exec();
    }
    async postTodoService(bodyCreateTodoDto) {
        let createTodoDto = {
            target: bodyCreateTodoDto.target,
            isCompleted: bodyCreateTodoDto.isCompleted,
            date: new Date(),
            dateIsCompleted: bodyCreateTodoDto.isCompleted ? new Date() : undefined,
            authorId: bodyCreateTodoDto.authorId
        };
        return await this.todoModel.create(createTodoDto);
    }
    async patchTodoService(bodyUpdateTodoDto, id) {
        let updateTodoDto = {
            isCompleted: bodyUpdateTodoDto.isCompleted,
            dateIsCompleted: bodyUpdateTodoDto.isCompleted ? new Date() : undefined
        };
        return await this.todoModel.findByIdAndUpdate(id, updateTodoDto);
    }
    async deleteTodoService(id) {
        return await this.todoModel.findByIdAndDelete(id);
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(todo_schema_1.Goal.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TodosService);
//# sourceMappingURL=todos.service.js.map