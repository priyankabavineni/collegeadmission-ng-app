import { Component } from '@angular/core';
import { StudentService } from '../services/student';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // ✅ Include RouterModule

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // ✅ Add RouterModule for routerLink
  templateUrl: './student-login.html',
  styleUrl: './student-login.css'
})
export class StudentLoginComponent {
  email = '';
  password = '';
  sid = 0;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  login() {
    this.studentService.login(this.email, this.password).subscribe({
      next: res => {
        if (res && res.sid) {
          this.sid = res.sid;
          alert('Login successful! SID: ' + this.sid);
          localStorage.setItem('sid', this.sid.toString());

          // ✅ Navigate to submit-application after login
          this.router.navigate(['/submit-application']);
        } else {
          alert('Invalid email or password');
        }
      },
      error: err => {
        alert('Login failed. Please try again.');
      }
    });
  }
}
