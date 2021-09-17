import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './group';
import { Utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http :HttpClient) { }
public getAllEmp():Observable <Utilisateur[]>
{
return this.http.get<Utilisateur[]>('http://localhost:8084/person');
}

public updateEmp(utilisateur :Utilisateur):Observable <Utilisateur>
{
return this.http.put <Utilisateur>('http://localhost:8084/edit',utilisateur);
}

public addEmp(utilisateur:Utilisateur):Observable<Utilisateur>
{
  return this.http.post<Utilisateur>('http://localhost:8084/addEmp',utilisateur);
}
public findEmpBy (id: number)
{
return this.http.get<Utilisateur>(`http://localhost:8084/edit/${id}`)
}
public getAllGrp():Observable <Group[]>
{
return this.http.get<Group[]>('http://localhost:8084/group');
}


public DeleteEmp(matricule:number):Observable <Utilisateur>
{
return this.http.delete<Utilisateur>(`http://localhost:8084/deleteEmp/${matricule}`);
}

}
