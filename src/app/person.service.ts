import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './group';
import { Structure } from './structure';
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
  console.log("===========================")
  console.log(JSON.stringify(utilisateur))
  var ok=JSON.stringify(utilisateur);
  console.log("===========================")
let p;
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
if(utilisateur.struct!=null){
var U=JSON.stringify(utilisateur.struct)
let s = U.replace(/\\n/g,'');
let b = s.replace(/([.*+?^=!$()|\[\]\/\\])/g,'');
console.log(b)
console.log(b)
let c=b.split("");
c.splice(0,1)
c.reverse()
c.splice(0,1)
c.reverse()
let a=c.join("")
console.log(a)
 p=JSON.parse(a) as Structure
console.log(p)
//let user=new Utilisateur(utilisateur.matricule,utilisateur.nom,utilisateur.prenom,utilisateur.nom_ar,"",0,"","","","","","",p)
let u1=new Utilisateur(0,"","","","",0,"","","","","","",new Structure())
u1.matricule=utilisateur.matricule;
u1.nom=utilisateur.nom
u1.prenom=utilisateur.prenom
u1.nom_ar=utilisateur.prenom_ar
u1.adresse=utilisateur.adresse
u1.age=utilisateur.age
u1.codeP=utilisateur.codeP
u1.description=utilisateur.description
u1.email=utilisateur.email
u1.struct=p
u1.numTele=utilisateur.numTele
u1.ville=utilisateur.ville
u1.prenom_ar=utilisateur.prenom_ar
var ok=JSON.stringify(u1)
console.log(ok)}

return this.http.put <Utilisateur>('http://localhost:8084/edit',ok,httpOptions);
}

public addEmp(utilisateur:Utilisateur):Observable <Utilisateur>
{
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
console.log(JSON.stringify(utilisateur))
var U=JSON.stringify(utilisateur.struct)
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
let p=JSON.parse(a) as Structure
console.log(p)
//------------
/*
var society=JSON.stringify(utilisateur.societe)

let s1 = society.replace(/\\n/g,'');
//console.log(s)
let b1 = s1.replace(/([.*+?^=!$()|\[\]\/\\])/g,'');
console.log(b1)
//JSON.parse(b)
console.log(b1)
let c1=b1.split("");
c1.splice(0,1)
//myArr.splice('"',);
c1.reverse()
c1.splice(0,1)
c1.reverse()
let a1=c1.join("")
console.log(a1)
let p1=JSON.parse(a1) as Societe
console.log(p1)
*/
//let user=new Utilisateur(utilisateur.matricule,utilisateur.nom,utilisateur.prenom,utilisateur.nom_ar,"",0,"","","","","","",new Structure())
let u1=new Utilisateur(0,"","","","",0,"","","","","","",new Structure())


u1.matricule=utilisateur.matricule;
u1.nom=utilisateur.nom
u1.prenom=utilisateur.prenom
u1.nom_ar=utilisateur.prenom_ar
u1.adresse=utilisateur.adresse
u1.age=utilisateur.age
u1.codeP=utilisateur.codeP
u1.description=utilisateur.description
u1.email=utilisateur.email
u1.struct=p
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
public findEmpSoc(id:String):Observable<Utilisateur[]>
{
  return this.http.get<Utilisateur[]>(`http://localhost:8084/findEmpSoc/${id}`);
}


public search( s:String):Observable<Utilisateur>
{
return this.http.get<Utilisateur>(`http://localhost:8084/filtrer/${s}`)
}
}

