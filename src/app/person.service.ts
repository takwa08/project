import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

var U=JSON.stringify(utilisateur.group)
let s = U.replace(/\\n/g,'');
//console.log(s)
let b = s.replace(/([.*+?^=!$()|\[\]\/\\])/g,'');
console.log(b)
//JSON.parse(b)
console.log(b)
let c=b.split("");
c.splice(0,1)
//myArr.splice('"',);
c.reverse()
c.splice(0,1)
c.reverse()
let a=c.join("")
console.log(a)
let p=JSON.parse(a) as Group
console.log(p)
//let user=new Utilisateur(utilisateur.matricule,utilisateur.nom,utilisateur.prenom,utilisateur.nom_ar,"",0,"","","","","","",p)
let u1=new Utilisateur(0,"","","","",0,"","","","","","",new Group(0,""))


u1.matricule=utilisateur.matricule;
u1.nom=utilisateur.nom
u1.prenom=utilisateur.prenom
u1.nom_ar=utilisateur.prenom_ar
u1.adresse=utilisateur.adresse
u1.age=utilisateur.age
u1.codeP=utilisateur.codeP
u1.description=utilisateur.description
u1.email=utilisateur.email
u1.group=p
u1.numTele=utilisateur.numTele
u1.ville=utilisateur.ville
u1.prenom_ar=utilisateur.prenom_ar
var ok=JSON.stringify(u1)
console.log(ok)

return this.http.put <Utilisateur>('http://localhost:8084/edit',ok,httpOptions);
}

public addEmp(utilisateur:Utilisateur):Observable <Utilisateur>
{
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

var U=JSON.stringify(utilisateur.group)
let s = U.replace(/\\n/g,'');
//console.log(s)
let b = s.replace(/([.*+?^=!$()|\[\]\/\\])/g,'');
console.log(b)
//JSON.parse(b)
console.log(b)
let c=b.split("");
c.splice(0,1)
//myArr.splice('"',);
c.reverse()
c.splice(0,1)
c.reverse()
let a=c.join("")
console.log(a)
let p=JSON.parse(a) as Group
console.log(p)
//let user=new Utilisateur(utilisateur.matricule,utilisateur.nom,utilisateur.prenom,utilisateur.nom_ar,"",0,"","","","","","",p)
let u1=new Utilisateur(0,"","","","",0,"","","","","","",new Group(0,""))


u1.matricule=utilisateur.matricule;
u1.nom=utilisateur.nom
u1.prenom=utilisateur.prenom
u1.nom_ar=utilisateur.prenom_ar
u1.adresse=utilisateur.adresse
u1.age=utilisateur.age
u1.codeP=utilisateur.codeP
u1.description=utilisateur.description
u1.email=utilisateur.email
u1.group=p
u1.numTele=utilisateur.numTele
u1.ville=utilisateur.ville
u1.prenom_ar=utilisateur.prenom_ar
var ok=JSON.stringify(u1)
console.log(ok)
return this.http.post<Utilisateur>('http://localhost:8084/addEmp',ok,httpOptions);
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


