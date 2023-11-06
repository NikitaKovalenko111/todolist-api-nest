import { ObjectId } from "mongoose";
export declare class BodyCreateTodoDto {
    readonly target: string;
    readonly isCompleted: boolean;
    readonly authorId: ObjectId;
}
export declare class CreateTodoDto {
    readonly target: string;
    readonly isCompleted: boolean;
    readonly date: Date;
    readonly dateIsCompleted?: Date;
    readonly authorId: ObjectId;
}
