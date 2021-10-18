import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { GrpEmpService } from '../grp-emp.service';
import { PersonService } from '../person.service';
import { Structure } from '../structure';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-add-emp-to-grp',
  templateUrl: './add-emp-to-grp.component.html',
  styleUrls: ['./add-emp-to-grp.component.css']
})
export class AddEmpToGrpComponent implements OnInit {
  g:Group=new Group(0,"")
  form: FormGroup ;
  res:boolean=false
  Gr:Group[]=[]
  employees:Utilisateur[]=[]
  constructor(private grpService:GroupService,private PersonService:PersonService,private fb:FormBuilder,) {
    this.form=this.fb.group
    ({
      listeGroupe: ['',[Validators.required]],
      listeEmp: ['',[Validators.required]
      ]})
   }

  ngOnInit(): void {
    this.getGrp()
    this.getEmployee()
  }
  affecter()
  {

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
public getGrp():void
{
   //  console.log(this.getGrp())

this.grpService.getAllGrp().subscribe
(
 ( res:Group[])=>

{  this.Gr=res
  console.log(this.Gr)
},

(error:HttpErrorResponse)=>{
  alert(error.message);
  console.log(error)
}
);
}


}
