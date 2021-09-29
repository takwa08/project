import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Admin } from './admin';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient)
  { }
  public logAdmin(admin:Admin):Observable<Admin>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    var a=JSON.stringify(admin)
    return this._http.post<Admin>("http://localhost:8084/login",a,httpOptions);
  }
}
