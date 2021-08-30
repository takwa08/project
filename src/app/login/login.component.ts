import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";
 admin = new Admin();
  form: FormGroup;
  sessionValue : string="";
  localValue : string="";
// constructor(private _service:LoginService, private _route : Router,private fb:FormBuilder) {

  constructor(private _route : Router,private fb:FormBuilder) {
    this.form=this.fb.group
    (
      { Email:['',
      [Validators.required,Validators.email,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],

      password: ['',
        [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)]
      ]}

    );
  }
  ngOnInit() {
    localStorage.setItem("FirstName","local -LDAP");
    sessionStorage.setItem("Session ","Session- LDAP");
  }
loginAdmin(email:string)
{/*this._service.logAdmin(this.admin).subscribe
  (
    data=>
    {
      sessionStorage.setItem('email',email)
      console.log("reponse recieved");
      localStorage.setItem('isConnected','true')
      console.log(data)*/
      this._route.navigate(["/EspaceAdministratif"]);
      console.log(this.form.value);
    /*  this.sessionValue=sessionStorage.getItem("Second");
      this.localValue=localStorage.getItem("FirstName");
      console.log(this.sessionValue);
      console.log(this.localValue);
      if(!this.sessionValue )
      {
        console.log("session null")
        return false
      }
      else
      {
        return true
      }
    },

    error =>
     {
    console.log("exception occured");
    this.msg="Bad credentials, please enter valid informations";
  }
  )*/



}
}
