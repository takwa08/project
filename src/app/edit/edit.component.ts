import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../person.service';
import { Utilisateur } from '../Utilisateur';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  u= new Utilisateur();


  constructor(private personSer:PersonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
   // console.log(this.router.snapshot.params.id);
  // this.personSer.findEmpBy(this.router.snapshot.params.id);
  this.editR(this.router.snapshot.params.id)
  }

Modifier(Uti:Utilisateur)
{
  this.personSer.updateEmp(Uti).subscribe
  (
    (response:Utilisateur)=>{

            this.u=Uti;

            console.log(response);
    },
   (error:HttpErrorResponse)=>
   {alert(error.message);}

  );
    }
    editR(e:number)
  {
    this.personSer.findEmpBy(e).subscribe
    (
      ( response:Utilisateur)=>
      {this.u=response;
        console.log(this.u)
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }
}
