import { Types } from 'mongoose';
export declare class authUserDto {
    _id: string | Types.ObjectId;
    username: string;
}
export declare class authUserTokenDto extends authUserDto {
    token: string;
}
