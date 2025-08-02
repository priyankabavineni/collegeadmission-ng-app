import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramModel } from '../../model/program-model';

interface ResponseData<T> {
  status: string;
  data: T;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private baseUrl = '/api/program';

  constructor(private http: HttpClient) {}

  saveProgram(program: ProgramModel): Observable<ResponseData<ProgramModel>> {
    return this.http.post<ResponseData<ProgramModel>>(`${this.baseUrl}/save`, program);
  }

  getAllPrograms(): Observable<ResponseData<ProgramModel[]>> {
    return this.http.get<ResponseData<ProgramModel[]>>(`${this.baseUrl}/all`);
  }
}