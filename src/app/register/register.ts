import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { strongPasswordValidator } from '../validators/strong-password-validator';
import { gmailValidator } from '../validators/gmail-validator';


@Component({
  selector: 'app-register',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email,gmailValidator]),
    password: new FormControl('', [Validators.required, strongPasswordValidator]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  // Check if password and confirmPassword match
  get passwordsDoNotMatch(): boolean {
  const pwd = this.registerForm.get('password')?.value ?? '';
  const confirmPwd = this.registerForm.get('confirmPassword')?.value ?? '';
  return pwd !== confirmPwd && this.registerForm.get('confirmPassword')?.touched === true;
}


  submitForm() {
    if (this.registerForm.valid && !this.passwordsDoNotMatch) {
      console.log(' Registration Successful:', this.registerForm.value);
    } else {
      console.log(' Form Invalid:', this.registerForm.value);
    }
  }
}

