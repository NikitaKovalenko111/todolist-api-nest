import { ObjectId } from "mongoose"

export class BodyCreateTodoDto {
    readonly target: string
    readonly isCompleted: boolean
    readonly authorId: ObjectId
}

export class CreateTodoDto {
    readonly target: string
    readonly isCompleted: boolean
    readonly date: Date
    readonly dateIsCompleted?: Date
    readonly authorId: ObjectId
}