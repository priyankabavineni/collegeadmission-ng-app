import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-login-component.html',
  styleUrl: './admin-login-component.css'
})
export class AdminLoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  private readonly adminUser = 'admin123';
  private readonly adminPass = 'pass123';

  constructor(private router: Router) {}

  login() {
    if (this.username === this.adminUser && this.password === this.adminPass) {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/admin']); 
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}


