import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type TodoDocument = HydratedDocument<Goal>;

@Schema()
export class Goal {
  @Prop({required: true})
  target: string;

  @Prop({required: true})
  isCompleted: boolean;

  @Prop({required: true})
  date: Date

  @Prop()
  dateIsCompleted: Date | undefined

  @Prop()
  authorId: ObjectId
}

export const TodoSchema = SchemaFactory.createForClass(Goal);