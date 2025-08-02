
export interface IApplication {
  applicationId: string;
  sid: number;
  
  adminId?: number;
  status: string;
  paymentDone: boolean;
 entranceExamScore: number ;
 rejectionReason?: string;
  reason: string; // single reason for approve/reject
}

