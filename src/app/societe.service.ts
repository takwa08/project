import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Societe } from './societe';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor(private http:HttpClient) { }
  public findByIdMin(ids:String):Observable<Societe[]>
  {
      return this.http.get<Societe[]>(`http://localhost:8084/find/${ids}`)
  }

  public addSociete(Societe:Societe):Observable<Societe>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    var varSociete=JSON.stringify(Societe)
    return this.http.post<Societe>("http://localhost:8084/addSociete",varSociete,httpOptions)
  }
}
