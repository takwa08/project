import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PersonService } from '../person.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  etat=false
employees:Utilisateur[];
employee:Utilisateur
form:FormGroup
sts:String
  constructor(private PersonService:PersonService,private _route:Router,private toastr:ToastrService,private fb:FormBuilder) {
this.form=this.fb.group({
  search_box:['',[Validators.required]]
})
  }

public getEmployee():void
{
this.PersonService.getAllEmp().subscribe(
 ( response:Utilisateur[])=>
{this.employees=response;
},
(error:HttpErrorResponse)=>{
  alert(error.message);
});

}
  ngOnInit(): void {
    this.getEmployee()
  }
  editR(e:number)
  {
    this.PersonService.findEmpBy(e).subscribe
    (
      ( response:Utilisateur)=>
      {this.employee=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });


  }
  delete(id: number):void
  {
    this.PersonService.DeleteEmp(id).subscribe
    (
      ()=>
      { //const emp=this.PersonService.findEmpBy(id)
        this.getEmployee()
        this.toastr.success(`L'employé a étè supprimer avec succées `)
        this._route.navigateByUrl('/person')

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
  }
  Decon ()
  {

    localStorage.removeItem('AdminEspace');
    localStorage.removeItem('isConnected');
    sessionStorage.removeItem('Logname')
      this._route.navigateByUrl('/');


  }




filtrer()
{
this.PersonService.search(this.form.get('search_box')?.value).subscribe((res:any)=>{
  this.etat=true;
console.log(res)
})
  }
}
