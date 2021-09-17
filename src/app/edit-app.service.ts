import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class EditAppService {

  constructor(private http :HttpClient) { }

public addEmp(utilisateur:Utilisateur):Observable<Utilisateur>
{
  return this.http.post<Utilisateur>('http://localhost:8084/addEmp',utilisateur);
}

}
