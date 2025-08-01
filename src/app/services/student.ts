import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/student';

  constructor(private http: HttpClient) {}

  register(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/register`, student);
  }

  login(email: string, password: string): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/login?email=${email}&password=${password}`, {});
  }
}
export { Student };

