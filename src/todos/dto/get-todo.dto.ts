import { ObjectId } from "mongoose";

export class getTodosDtoType {
    readonly authorId: ObjectId
    readonly target: string
}