export interface Status {
  applicationId: number;
  studentId: number;
  programName: string;
  departmentName: string;
  entranceExam: string;
  entranceExamScore?: number;
  paymentDone: boolean;
  rejectionReason?: string;
  status: 'APPROVED' | 'REJECTED';
}
