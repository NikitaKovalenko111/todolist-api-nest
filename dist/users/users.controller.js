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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const authDto_dto_1 = require("./authDto.dto");
const users_service_1 = require("./users.service");
const mongoose_1 = require("mongoose");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    registration(registrationBody) {
        return this.usersService.registrationService(registrationBody.username, registrationBody.password);
    }
    authrizationByToken(token) {
        return this.usersService.authorizationByToken(token);
    }
    authorization(authorizationDto) {
        return this.usersService.authorizationService(authorizationDto.username, authorizationDto.password);
    }
    getUsers() {
        return this.usersService.getUsers();
    }
    getUser(id) {
        return this.usersService.getUserById(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('/registration'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authDto_dto_1.registrationDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "registration", null);
__decorate([
    (0, common_1.Get)('/authorization/:token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "authrizationByToken", null);
__decorate([
    (0, common_1.Post)('/authorization'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authDto_dto_1.authorizationDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "authorization", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map