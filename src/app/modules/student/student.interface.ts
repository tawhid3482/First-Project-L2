import { Schema, model, connect } from 'mongoose';

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
};
