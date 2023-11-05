import { Model, Types } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { authUserDto } from './authUserDto.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    private generateAccessToken;
    registrationService(username: string, password: string): Promise<User | string>;
    authorizationService(username: string, password: string): Promise<string>;
    authorizationByToken(token: string): Promise<authUserDto>;
    getUsers(): Promise<User[]>;
    getUserById(id: Types.ObjectId): Promise<User>;
}
