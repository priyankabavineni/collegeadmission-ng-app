import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApplication } from '../../model/admin-model';
import { IStudent } from '../../model/student-model';

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

interface ApplicationActionDto {
  applicationId: string;
  adminId: number;
  action: 'APPROVE' | 'REJECT';
  rejectionReason?: string;
  approvalReason?: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private apiUrl = '/api/admin';
  private adminId = 101; // hardcoded admin ID

  constructor(private http: HttpClient) {}

  getStudentById(studentId: number): Observable<ApiResponse<IStudent>> {
    return this.http.get<ApiResponse<IStudent>>(`${this.apiUrl}/student/${studentId}`);
  }

  getAllApplications(): Observable<ApiResponse<IApplication[]>> {
    return this.http.get<ApiResponse<IApplication[]>>(`${this.apiUrl}/applications`);
  }

  approveApplicationWithReason(appId: string, reason: string): Observable<any> {
    const dto: ApplicationActionDto = {
      applicationId: appId,
      adminId: this.adminId,
      action: 'APPROVE',
      approvalReason: reason
    };
    return this.http.post(`${this.apiUrl}/action`, dto);
  }

  rejectApplication(appId: string, reason: string): Observable<any> {
    const dto: ApplicationActionDto = {
      applicationId: appId,
      adminId: this.adminId,
      action: 'REJECT',
      rejectionReason: reason
    };
    return this.http.post(`${this.apiUrl}/action`, dto);
  }
}
