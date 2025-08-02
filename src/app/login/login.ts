import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports:[FormsModule,CommonModule],
  templateUrl: './login.html',
styleUrls: ['./login.css']

})
export class Login {
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Simple auth logic — replace with real backend check if needed
    if (this.username && this.password && this.role) {
      if (this.role === 'student') {
        this.router.navigate(['/student']);
      } else if (this.role === 'admin') {
        this.router.navigate(['/admin']);
      }
    } else {
      alert("Please fill all fields and select a role.");
    }
  }
}
