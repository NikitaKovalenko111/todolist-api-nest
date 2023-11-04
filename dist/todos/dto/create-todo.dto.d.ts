export declare class BodyCreateTodoDto {
    readonly target: string;
    readonly isCompleted: boolean;
}
export declare class CreateTodoDto {
    readonly target: string;
    readonly isCompleted: boolean;
    readonly date: Date;
    readonly dateIsCompleted?: Date;
}
