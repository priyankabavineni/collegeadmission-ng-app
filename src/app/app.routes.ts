import { RouterModule, Routes } from '@angular/router';

import { Register } from './register/register';
import { Student } from './student/student';

import { Program } from './program/program';

import { NgModule } from '@angular/core';
import { Admin } from './admin/admin';
import { Login } from './login/login';


export const routes: Routes = [
      { path: 'login', component: Login},
       { path: 'admin', component: Admin },
      
    { path: 'student', component: Student },
    
     { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   

