import exp from 'constants';
import { Schema, model, connect } from 'mongoose';

export type Gradient ={
    fatherName:string;
    motherName:string;
    fatherCon:string;
    montherCon:string;
}

export type Student = {
  id: string;
  name: {
    fristName: string;
    middleName: string;
    lastName: string;
  };
  gender:"male" | "female";
  birthday: string;
  email: string;
  avatar?: string;
  contact: string;
  guardient:Gradient
};
