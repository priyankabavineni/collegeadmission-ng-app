export interface IApplication {
  applicationId: string;
  sid: number;
  programId: number;
  adminId?: number;
  status: string;
  paymentDone: boolean;
  entranceExamRank: number;
  reason?: string; // single reason for approve/reject
}
