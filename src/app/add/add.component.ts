import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../person.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
u =new Utilisateur

constructor(private personServ:PersonService) { }
alert:boolean=false
  ngOnInit(): void {}
  Ajouter(addF:NgForm)
  {
this.personServ.addEmp(addF.value).subscribe
(
  (response:Utilisateur)=>{
    console.log(response);


  },
 (error:HttpErrorResponse)=>
 {alert(error.message);}

);
this.alert=true
  }

}
