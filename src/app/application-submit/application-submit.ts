import { Component, OnInit } from '@angular/core';
import { Application } from '../models/application.model';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-application-submit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './application-submit.html',
  styleUrl: './application-submit.css'
})
export class ApplicationSubmitComponent implements OnInit {
  application: Application = {
    sid: 0,
    program: '',
    department: '',
    entranceExam: '',
    entranceExamScore: 0,
    paymentDone: false
  };

  programs: string[] = ['B.Tech', 'M.Tech', 'MBA', 'MCA'];

  departmentsMap: { [key: string]: string[] } = {
    'B.Tech': ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'IT'],
    'M.Tech': ['CSE', 'VLSI Design', 'Structural Engg', 'Thermal Engg'],
    'MBA': ['Finance', 'Marketing', 'HR', 'Operations'],
    'MCA': ['Computer Applications', 'Data Science']
  };

  availableDepartments: string[] = [];
  submissionSuccess = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const storedSid = localStorage.getItem('sid');
      if (storedSid) {
        this.application.sid = parseInt(storedSid, 10);
      } else {
        alert('Student not logged in. Redirecting to login...');
        window.location.href = '/login';
      }
    }
  }

  onProgramChange() {
    this.availableDepartments = this.departmentsMap[this.application.program] || [];
    this.application.department = '';
  }

  submitApplication() {
    if (!this.application.program || !this.application.department) {
      alert('Please fill in all required fields');
      return;
    }

    if (
      this.application.entranceExam === 'YES' &&
      (this.application.entranceExamScore == null || this.application.entranceExamScore < 0)
    ) {
      alert('Please enter a valid entrance exam score');
      return;
    }

    if (!this.application.paymentDone) {
      alert('Please confirm payment before submitting');
      return;
    }

    console.log('Payload being sent:', this.application);

    this.http.post('http://localhost:8080/api/applications/apply', this.application).subscribe({
      next: () => {
        this.submissionSuccess = true;
      },
      error: (err) => {
        alert(err.error?.message || 'Failed to submit application');
      }
    });
  }
}
