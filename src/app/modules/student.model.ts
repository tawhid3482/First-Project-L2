import { Schema, model, connect } from 'mongoose';
import { Student } from './student/student.interface';

const StudentSchema = new Schema<Student>({
  id: { type: String },
  name: {
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
    gender: ['male', 'female'],
    birthday: { type: String },
    email: { type: String },
    avatar: { type: String },
    contact: { type: String },
  },
});
