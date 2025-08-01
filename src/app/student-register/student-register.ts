import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-register',
  imports: [CommonModule,FormsModule ],
  templateUrl: './student-register.html',
  styleUrl: './student-register.css'
})
export class StudentRegisterComponent {
  student: Student = new Student();

  constructor(private studentService: StudentService, private router: Router) {}

  register() {
    this.studentService.register(this.student).subscribe({
      next: res => {
        alert('Registered successfully!');
        this.router.navigate(['/login']);
      },
      error: err => alert('Error: ' + err.message)
    });
  }
}

