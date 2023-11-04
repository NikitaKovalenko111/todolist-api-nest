import { authorizationDto, registrationDto } from './authDto.dto';
import { UsersService } from './users.service';
import { User } from 'src/schemas/user.schema';
import { Types } from 'mongoose';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registration(registrationBody: registrationDto): Promise<User | string>;
    authorization(authorizationDto: authorizationDto): Promise<string>;
    getUsers(): Promise<User[]>;
    getUser(id: Types.ObjectId): Promise<User>;
}