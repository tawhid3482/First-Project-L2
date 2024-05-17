import { Schema, model, connect } from 'mongoose';

export type Gradient = {
  fatherName: string;
  motherName: string;
  fatherCon: string;
  montherCon: string;
};
export type UserName = {
  fristName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  birthday: string;
  email: string;
  avatar?: string;
  contact: string;
  guardient: Gradient;
};
