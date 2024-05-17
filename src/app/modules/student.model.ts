import { Schema, model, connect } from 'mongoose';
import { Student } from './student/student.interface';

const StudentSchema = new Schema<Student>({
  id: { type: String },
  name:{
    fristName:{
        type:String,
         required:true
    },
    middleName:{
        type:String,
        required:true
    }

  }

});
