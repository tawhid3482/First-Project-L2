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
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  birthday: { type: String },
  email: { type: String },
  avatar: { type: String },
  contact: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', StudentSchema);
