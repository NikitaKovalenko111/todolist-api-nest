export class BodyCreateTodoDto {
    readonly target: string
    readonly isCompleted: boolean
}

export class CreateTodoDto {
    readonly target: string
    readonly isCompleted: boolean
    readonly date: Date
    readonly dateIsCompleted?: Date
}