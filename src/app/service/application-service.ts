import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApplication } from '../../model/application-model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  baseUrl: string = '/api/admin';

  constructor(private httpClient: HttpClient) {}

  // Fetch applications by adminId and status
  getApplicationsByStatus(adminId: number, status: string): Observable<IApplication[]> {
    return this.httpClient.get<IApplication[]>(`${this.baseUrl}/${adminId}/applications/${status}`);
  }

  // Fetch all applications by multiple statuses and combine results
  getAllApplicationsByStatuses(adminId: number, statuses: string[]): Observable<IApplication[]> {
    return forkJoin(
      statuses.map(status => this.getApplicationsByStatus(adminId, status))
    ).pipe(
      map(results => results.flat())
    );
  }
}
