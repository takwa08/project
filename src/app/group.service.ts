import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './group';
import { Utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http :HttpClient) { }

  public getAllGrp():Observable <Group[]>
  {
    console.log( this.http.get<Group[]>(`http://localhost:8084/group`))
return this.http.get<Group[]>(`http://localhost:8084/group`);
  }
  public addG(Groupe:Group):Observable <Group>
  {
 const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
 var g=JSON.stringify(Groupe)
return this.http.post<Group>(`http://localhost:8084/addGrp`,g,httpOptions);
  }
  public deleteGroupe(nomGroup:String):Observable<Group>
  {return this.http.delete<Group>(`http://localhost:8084/deleteGrp/${nomGroup}`);}

  public updateGrp(Groupe:Group):Observable <Group>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
 var g=JSON.stringify(Groupe);
 return this.http.put<Group>(`http://localhost:8084/editGrp`,g,httpOptions);
  }

  public findByIdGrp(id:number)
  {
return this.http.get<Group>(`http://localhost:8084/findByID/${id}`);
  }
}
