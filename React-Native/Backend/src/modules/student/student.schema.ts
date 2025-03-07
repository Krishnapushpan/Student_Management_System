import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true, unique: true })
  registerno: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  course: string;

  @Prop({ required: true })
  level: string;

  @Prop({ required: true })
  semester: string;

  @Prop({ required: true })
  batch: string;

  @Prop({ required: true })
  year: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
