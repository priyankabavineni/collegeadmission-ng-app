export interface Application {
  sid: number;
  program: string;
  department: string;
  entranceExam?: string;         // "YES" or "NO"
  entranceExamScore?: number;   // optional
  paymentDone?: boolean;
}
