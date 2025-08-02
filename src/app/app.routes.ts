import { Routes } from '@angular/router';
import { StudentRegisterComponent } from './student-register/student-register';
import { StudentLoginComponent } from './student-login/student-login';
import { ApplicationSubmitComponent } from './application-submit/application-submit';
import { ApplicationStatusComponent } from './application-status/application-status';
import { HomeComponent } from './home/home';
import { Admin } from './admin/admin';
import { Aboutus } from './aboutus/aboutus';
import { Careeropputunities } from './careeropputunities/careeropputunities';
import { AdminLoginComponent } from './admin-login-component/admin-login-component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'register', component: StudentRegisterComponent },
  { path: 'login', component: StudentLoginComponent },
  { path: 'submit-application', component: ApplicationSubmitComponent },
  { path: 'status', component: ApplicationStatusComponent },
  { path: 'admin', component: Admin },
  { path: 'about', component: Aboutus },
  { path: 'careeropportunities', component: Careeropputunities },
  { path: 'admin-login', component: AdminLoginComponent }
];
