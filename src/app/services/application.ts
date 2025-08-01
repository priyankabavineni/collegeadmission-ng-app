import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:8080/api/applications';

  constructor(private http: HttpClient) {}

  submit(application: Application): Observable<Application> {
  // Updated path to match backend endpoint
  return this.http.post<Application>(`${this.baseUrl}/apply`, application);
}



  getByStudentId(sid: number): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.baseUrl}/student/${sid}`);
  }
}
