import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private baseUrl = 'http://localhost:8080/api/applications'; // Change if needed

  constructor(private http: HttpClient) {}

  // Fetch all applications by status
  getApplicationsByStatus(status: string): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.baseUrl}/status/${status}`);
  }
}
