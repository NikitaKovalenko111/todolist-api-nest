import { Types } from "mongoose";
export declare class BodyCreateTodoDto {
    readonly target: string;
    readonly isCompleted: boolean;
    readonly authorId: Types.ObjectId;
}
export declare class CreateTodoDto {
    readonly target: string;
    readonly isCompleted: boolean;
    readonly date: Date;
    readonly dateIsCompleted?: Date;
    readonly authorId: Types.ObjectId;
}
