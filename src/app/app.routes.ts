import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Student } from './student/student';
import { Admin } from './admin/admin';
import { Aboutus } from './aboutus/aboutus';
import { Careeropputunities } from './careeropputunities/careeropputunities';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'student', component: Student },
  { path: 'admin', component: Admin },
  { path: 'aboutus', component: Aboutus },
  {path:'careeroppurtunities', component:Careeropputunities},
  { path: '**', redirectTo: '/home' }
];
