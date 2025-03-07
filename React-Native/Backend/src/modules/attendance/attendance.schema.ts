import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class StudentAttendance {
  @Prop({ required: true })
  registerno: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ['Present', 'Absent'] })
  status: string;
}

@Schema()
export class Attendance extends Document {
  @Prop({ required: true })
  batch: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  course: string;

  @Prop({ required: true })
  level: string;

  @Prop({ required: true })
  semester: string;

  @Prop({ required: true })
  date: string;

  @Prop({ type: [StudentAttendance] })  // ✅ Store attendance as an array
  attendance: StudentAttendance[];
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
