import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ministere } from './ministere';

@Injectable({
  providedIn: 'root'
})
export class MinistereService {

  constructor(private http:HttpClient) { }
  public getMinistere():Observable<Ministere[]>
  {
    return this.http.get<Ministere[]>("http://localhost:8084/Structure")
  }
}
