import { IApplication } from './admin-model';

export interface IStudent {
  sid: number;
  sname: string;
  email: string;
  tenthMarks: number;
  interMarks: number;
  hasEntranceExam: boolean;
  entranceExamScore: number;
  applications: IApplication[];
}


export class Student {
  sid?: number;
  sname!: string;
  email!: string;
  password!: string;
  role?: string;
  tenthMarks!: number;  // NEW
  interMarks!: number;  // NEW
}



