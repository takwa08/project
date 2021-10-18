import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Structure } from './structure';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http:HttpClient) { }


public addStructure(structure:Structure):Observable<Structure>
{


return this.http.post<Structure>("",structure)
}

public deleteStructure(idStruct:number)
{
return this.http.delete("")
}





}
