import { Routes } from '@angular/router';
import { StudentRegisterComponent } from './student-register/student-register';
import { StudentLoginComponent } from './student-login/student-login';
import { ApplicationSubmitComponent } from './application-submit/application-submit';
import { ApplicationStatusComponent } from './application-status/application-status';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: StudentRegisterComponent },
  { path: 'login', component: StudentLoginComponent },
  { path: 'submit-application', component: ApplicationSubmitComponent },
  { path: 'status', component: ApplicationStatusComponent },
];
