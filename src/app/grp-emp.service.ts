import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Affectation } from './group_emp';
import { Utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class GrpEmpService {

  constructor(private http:HttpClient) { }

  public affcterEmp(affectation:Affectation):Observable<Affectation>
  { const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  let U=JSON.stringify(affectation.employees)
  let s = U.replace(/\\n/g,'');
  let b = s.replace(/([.*+?^=!$()|\[\]\/\\])/g,'');
  console.log(b)
  console.log(b)
  let c=b.split("");
  console.log(c)
  c.splice(0,1)
  c.reverse()
  c.splice(0,1)
  c.reverse()
  let a=c.join("")
  console.log(a)
  let p=JSON.parse(a) as Utilisateur
  console.log(p)
  affectation.employees=p;
 let  l=JSON.stringify(affectation)
  console.log(l)

        return this.http.post<Affectation>("http://localhost:8084/addGrp_emp",l,httpOptions)}

public getEmp(id :number):Observable<Affectation[]>

{
  return this.http.get<Affectation[]>(`http://localhost:8084/getEmp/${id}`)
}



}
