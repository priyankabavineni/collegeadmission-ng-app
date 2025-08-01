import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IApplication } from '../../model/admin-model';
import { AdminService } from '../service/admin-servcie';
import { IStudent } from '../../model/student-model';

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {

  allApplications: IApplication[] = [];
allApplicationsLoading = false;
allApplicationsError = '';

  studentId: number | null = null;
  student: IStudent | null = null;
  isError = false;
  errorMsg = '';
  loading = false;

  showReasonPopup = false;
  reasonText = '';
  reasonAppId: string | null = null;
  reasonAction: 'APPROVE' | 'REJECT' | null = null;

  constructor(private adminService: AdminService) {}

  fetchStudentApplications(): void {
    this.resetState();
    if (!this.studentId || this.studentId <= 0) {
      this.isError = true;
      this.errorMsg = 'Please enter a valid Student ID';
      return;
    }
    this.loading = true;
    this.adminService.getStudentById(this.studentId).subscribe({
      next: (res: ApiResponse<IStudent>) => {
        this.loading = false;
        this.student = res.data;

        if (!this.student || !this.student.applications || this.student.applications.length === 0) {
          this.isError = true;
          this.errorMsg = 'No applications found for this student.';
        }
      },
      error: (err: any) => this.handleError('Failed to fetch student applications.', err)
    });
  }

  openReasonPopup(appId: string, action: 'APPROVE' | 'REJECT'): void {
    this.reasonAppId = appId;
    this.reasonAction = action;
    this.reasonText = '';
    this.showReasonPopup = true;
  }

  closeReasonPopup(): void {
    this.showReasonPopup = false;
    this.reasonAppId = null;
    this.reasonAction = null;
    this.reasonText = '';
  }

  submitReason(): void {
    if (!this.reasonAppId || !this.reasonText.trim()) {
      alert('Please enter the reason.');
      return;
    }
    if (this.reasonAction === 'APPROVE') {
      this.adminService.approveApplicationWithReason(this.reasonAppId, this.reasonText.trim()).subscribe({
        next: () => {
          alert('Application approved successfully!');
          this.updateApplicationStatus(this.reasonAppId!, 'APPROVED', this.reasonText.trim());
          this.closeReasonPopup();
        },
        error: () => alert('Failed to approve application.')
      });
    } else if (this.reasonAction === 'REJECT') {
      this.adminService.rejectApplication(this.reasonAppId, this.reasonText.trim()).subscribe({
        next: () => {
          alert('Application rejected successfully!');
          this.updateApplicationStatus(this.reasonAppId!, 'REJECTED', this.reasonText.trim());
          this.closeReasonPopup();
        },
        error: () => alert('Failed to reject application.')
      });
    }
  }

private updateApplicationStatus(appId: string, status: 'APPROVED' | 'REJECTED', reason: string) {
  if (!this.student) return;
  
  const updatedApplications = this.student.applications.map(app => {
    if (app.applicationId === appId) {
      return {
        ...app,
        status: status,
        reason: reason
      };
    }
    return app;
  });

  this.student = {
    ...this.student,
    applications: updatedApplications
  };
}


  private resetState(): void {
    this.isError = false;
    this.errorMsg = '';
    this.student = null;
    this.loading = false;
  }

  private handleError(msg: string, err: any): void {
    this.loading = false;
    this.isError = true;
    this.errorMsg = msg;
    console.error(err);
  }


  fetchAllApplications(): void {
  this.allApplicationsLoading = true;
  this.allApplicationsError = '';
  this.adminService.getAllApplications().subscribe({
    next: (res) => {
      this.allApplicationsLoading = false;
      if (res.status === 'success' && res.data) {
        this.allApplications = res.data;
      } else {
        this.allApplicationsError = 'No applications found.';
        this.allApplications = [];
      }
    },
    error: (err) => {
      this.allApplicationsLoading = false;
      this.allApplicationsError = 'Failed to fetch all applications.';
      console.error(err);
    }
  });
}

}
