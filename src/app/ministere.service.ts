import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Structure } from './structure';

@Injectable({
  providedIn: 'root'
})
export class MinistereService {

  constructor(private http:HttpClient) { }
  public getAllMinistere():Observable<Structure[]>
  {
    return this.http.get<Structure[]>("http://localhost:8084/Structure")
  }
  public ajouterMinistere(ministere:Structure):Observable<Structure>
{
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  let U=JSON.stringify(ministere.parentStruct)
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
  let p=JSON.parse(a) as Structure
  console.log(p)
  ministere.parentStruct=p;
  var l=JSON.stringify(ministere)
  console.log(l)
      return this.http.post<Structure>("http://localhost:8084/addStructure",l,httpOptions)
  }
  public removeStructure(Ministere_id:number):Observable<Structure>
  {
    return this.http.delete<Structure>(`http://localhost:8084/delete/${Ministere_id}`)
  }

  updateMinistere(ministere:Structure):Observable<Structure>
  {const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")


  let l;
  l=JSON.stringify(ministere)
  if(ministere.parentStruct!=null){
  let U=JSON.stringify(ministere.parentStruct)



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
  let p=JSON.parse(a) as Structure
  console.log(p)
  ministere.parentStruct=p;
   l=JSON.stringify(ministere)
  console.log(l)}

return this.http.put<Structure>('http://localhost:8084/editStructure',l,httpOptions)
  }
findMinis(m:number):Observable<Structure>
{
  return this.http.get<Structure>(`http://localhost:8084/findMin/${m}`);

}

findParentStructByID(id:number):Observable<Structure>
{
  return this.http.get<Structure>(`http://localhost:8084/findP/${id}`);
}

}
