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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.generateAccessToken = (id, username, password) => {
            const payload = {
                id,
                username,
                password
            };
            return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '24h' });
        };
    }
    async registrationService(username, password) {
        let candidate = await this.userModel.findOne({ username: username });
        if (candidate) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.CONFLICT);
        }
        const cryptedPassword = bcrypt.hashSync(password, 7);
        const registrationUserDto = {
            username: username,
            password: cryptedPassword
        };
        let user = await this.userModel.create(registrationUserDto);
        return user;
    }
    async authorizationService(username, password) {
        let candidate = await this.userModel.findOne({ username: username });
        if (!candidate)
            throw new common_1.HttpException("User with such username wasn't found", common_1.HttpStatus.BAD_REQUEST);
        let isPasswordCorrect = bcrypt.compareSync(password, candidate.password);
        if (!isPasswordCorrect)
            throw new common_1.HttpException("Password is incorrect", common_1.HttpStatus.BAD_REQUEST);
        const token = this.generateAccessToken(candidate._id, candidate.username, candidate.password);
        return token;
    }
    async authorizationByToken(token) {
        let decoded = jwt.verify(token, process.env.JWT_KEY);
        const authUser = {
            _id: decoded.id,
            username: decoded.username,
        };
        return authUser;
    }
    async getUsers() {
        let users = await this.userModel.find().exec();
        return users;
    }
    async getUserById(id) {
        let user = await this.userModel.findById(id);
        if (!user)
            throw new common_1.HttpException('There is no user with such id', common_1.HttpStatus.NOT_FOUND);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map