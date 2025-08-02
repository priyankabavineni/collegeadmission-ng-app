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
