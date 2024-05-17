import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudentDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentDB = async (id) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentDB,
  getSingleStudentDB,
};
