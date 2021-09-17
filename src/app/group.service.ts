import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http :HttpClient) { }

  public getAllGrp():Observable <Group[]>
  {
return this.http.get<Group[]>(`http://localhost:8084/group`);
  }


  public addG(Groupe:Group):Observable <Group>
  {
return this.http.post<Group>(`http://localhost:8084/addGrp`,Groupe);
  }
  public deleteGroupe(nomGroup:String):Observable<Group>
  {

    return this.http.delete<Group>(`http://localhost:8084/deleteGrp/${nomGroup}`)
  }
}
