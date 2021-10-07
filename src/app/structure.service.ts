import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ministere } from './ministere';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http:HttpClient) { }
public getAllStructure():Observable<Ministere>
{
  return this.http.get<Ministere>("http://localhost:4200/Structure");
}


}
