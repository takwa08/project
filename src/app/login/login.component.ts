import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string="";
 admin = new Admin(0,"","");
  form: FormGroup;

constructor( private _route : Router,private fb:FormBuilder,private logServ:LoginService,private toast:ToastrService) {


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

  }
  onEvent(){
    this.toast.warning("nope")
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
  this.admin.id=0;
  this.admin.username=this.getEmail();
  this.admin.password=this.getPassword();

this.logServ.logAdmin(this.admin).subscribe(
()=>
  {
   //console.log(data)
      localStorage.setItem("isConnected",this.admin.username);

      this._route.navigateByUrl('/EspaceAdministratif')
      this.toast.success("Connexion réussie")
if( this._route.url==="/login")
{
  this._route.navigateByUrl('/EspaceAdministratif')
}

  },
  (error:HttpErrorResponse)=>
  {

    if(error.status==404)
    {
      this.toast.warning("Adresse ou mot de passe incorrecte ! ")
    }
  }

 );



}
}


