import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Admin } from '../admin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 admin = new Admin();
  form: FormGroup;
  constructor( private _route : Router,private fb:FormBuilder) {
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
loginAdmin()
{
  this._route.navigate(["/EspaceAdministratif"]);
  console.log(this.form.value);
}
}
