/*
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogAuthGuard implements CanActivate {
  constructor(private _route : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

if(Boolean(localStorage.getItem("isConnected")))

{
      return true;}
      else{
        this._route.navigateByUrl('/login')
        return false
      }
  }

}
*/
