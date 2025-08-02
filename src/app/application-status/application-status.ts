import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Status } from '../models/status.model';
import { StatusService } from '../models/status.service';

@Component({
  selector: 'app-application-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-status.html',
  styleUrls: ['./application-status.css']
})
export class ApplicationStatusComponent implements OnInit {

  approvedList: Status[] = [];
  rejectedList: Status[] = [];
  isLoading = false;
  isAuthenticated = false;
  errorMessage = '';

  username = '';
  password = '';

  // Static credentials
  private readonly adminUser = 'admin123';
  private readonly adminPass = 'pass123';

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
  const isAdmin = localStorage.getItem('isAdmin');
  if (!isAdmin) {
    window.location.href = '/admin-login'; // 🚫 Force login first
  } else {
    this.loadStatusData();
  }
}


  login(): void {
    if (this.username === this.adminUser && this.password === this.adminPass) {
      this.isAuthenticated = true;
      this.errorMessage = '';
      this.loadStatusData();
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }

  loadStatusData(): void {
    this.isLoading = true;

    // Fetch Approved
    this.statusService.getApplicationsByStatus('APPROVED').subscribe({
      next: (data) => this.approvedList = data,
      error: (err) => console.error('Error fetching approved:', err)
    });

    // Fetch Rejected
    this.statusService.getApplicationsByStatus('REJECTED').subscribe({
      next: (data) => {
        this.rejectedList = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching rejected:', err);
        this.isLoading = false;
      }
    });
  }
}
