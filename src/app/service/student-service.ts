import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
baseUrl: string = '/api/student';

  constructor(private httpClient: HttpClient) {}

  // Save student details
  saveStudent(body: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/save`, body);
  }

  
  getStudentApplications(sid: number) {
    return this.httpClient.get<any>(`${this.baseUrl}/applications?sid=${sid}`);
  }

loginStudent(loginDTO: { sname: string; password: string }) {
  return this.httpClient.post<any>('http://localhost:8080/api/student/login', loginDTO);
}





}
