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
 admin = new Admin(0,"","");
  form: FormGroup;
 sessionValue : string="";
localValue : string="";
constructor( private _route : Router,private fb:FormBuilder,private logServ:LoginService) {


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

   // sessionStorage.setItem("Session ","Session- LDAP");

  }

  getEmail()
  {
    return this.form.get('Email')?.value
  }
  getPassword()
  {
    return this.form.get('password')?.value
  }
loginAdmin()
{

console.log(this.form)
this._route.navigateByUrl('/EspaceAdministratif')

}
}
