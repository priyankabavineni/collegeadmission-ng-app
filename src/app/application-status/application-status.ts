import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application';
import { Application } from '../models/application.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-status',
  imports: [CommonModule, FormsModule],
  templateUrl: './application-status.html',
  styleUrl: './application-status.css'
})
export class ApplicationStatusComponent implements OnInit {
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    const sid = Number(localStorage.getItem('sid'));
    this.applicationService.getByStudentId(sid).subscribe({
      next: res => this.applications = res,
      error: err => alert('Could not fetch status')
    });
  }
}

