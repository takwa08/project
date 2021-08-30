import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Admin } from './admin';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient)
  { }
  public logAdmin(admin:Admin):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/login",admin);
  }
}
