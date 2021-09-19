import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { PersonService } from '../person.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
u =new Utilisateur
g:Group[]
constructor(private personServ:PersonService,private groupServ:GroupService) { }
alert:boolean=false
  ngOnInit(): void {
    this.getGrp
    console.log(this.getGrp()) }

  public getGrp():void
  {


  this.groupServ.getAllGrp().subscribe
  (
   ( res:Group[])=>

  {
    this.g=res;
    console.log(res)
  },

  (error:HttpErrorResponse)=>{
    alert(error.message);
    console.log(error)
  }
  );

}
  Ajouter(addF:NgForm)
  {
this.personServ.addEmp(addF.value).subscribe
(
  (response:Utilisateur)=>{
    console.log(response);
this.alert=true

  },
 (error:HttpErrorResponse)=>
 {alert(error.message);}

);

  }

}
