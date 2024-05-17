import { Schema, model } from 'mongoose';
import { Student, UserName } from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  fristName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const StudentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  birthday: { type: String },
  email: { type: String },
  avatar: { type: String },
  contact: { type: String },
});

export const StudentModel = model<Student>('Student', StudentSchema);
