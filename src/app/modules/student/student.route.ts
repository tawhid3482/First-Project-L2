import express from 'express';
import { StudentControllers } from './student.controller';

const route = express.Router();

route.post('/create-student', StudentControllers.createStudent);
route.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = route;
