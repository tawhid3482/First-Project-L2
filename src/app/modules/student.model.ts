import { Schema, model } from 'mongoose';
import { Student, UserName } from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  fristName: {
    type: String,
    required: [true, 'Frist name is required'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'last name required'],
  },
});

const StudentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not supported ',
    },
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
