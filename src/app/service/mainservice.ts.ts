import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainserviceTs {
    baseurl:String='/api'
  constructor(private http:HttpClient){}
  getprints(){
    return this.http.get(this.baseurl+"/welcome");
  }
}
