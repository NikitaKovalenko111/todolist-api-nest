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
exports.TodosController = void 0;
const todos_service_1 = require("./todos.service");
const common_1 = require("@nestjs/common");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const get_todo_dto_1 = require("./dto/get-todo.dto");
let TodosController = class TodosController {
    constructor(todosService) {
        this.todosService = todosService;
    }
    getAllTodos(getTodosDto) {
        return this.todosService.getAllTodos(getTodosDto);
    }
    getTodoById(id) {
        return this.todosService.getTodoById(id);
    }
    postTodo(bodyCreateTodoDto) {
        return this.todosService.postTodoService(bodyCreateTodoDto);
    }
    patchTodoById(bodyUpdateTodoDto, id) {
        return this.todosService.patchTodoService(bodyUpdateTodoDto, id);
    }
    deleteTodoById(id) {
        return this.todosService.deleteTodoService(id);
    }
};
exports.TodosController = TodosController;
__decorate([
    (0, common_1.Post)('/get'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_todo_dto_1.getTodosDtoType]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "getAllTodos", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "getTodoById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.BodyCreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "postTodo", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_todo_dto_1.BodyUpdateTodoDto, Object]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "patchTodoById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "deleteTodoById", null);
exports.TodosController = TodosController = __decorate([
    (0, common_1.Controller)('todos'),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
//# sourceMappingURL=todos.controller.js.map