import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Group } from '../group';
import { GroupService } from '../group.service';
import{NgModel}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-grp',
  templateUrl: './add-grp.component.html',
  styleUrls: ['./add-grp.component.css']
})
export class AddGrpComponent implements OnInit {
  g:Group=new Group(0,"")
 form: FormGroup;
  res:boolean=false

  constructor(private ServGrp:GroupService,private forb:FormBuilder,private toastr:ToastrService,private route:Router) {
    this.form=this.forb.group
    ({
        nomGroup: ['',[Validators.required]
      ]}

    );
   }

  ngOnInit(): void {

  }
  get()
  {
    return this.form.get('nomGroup')
  }


public addG()
{

this.g.idGrp=0;
this.g.nomGroup=this.get()?.value

  this.ServGrp.addG(this.g).subscribe(
  (response:Group)=>{
    if(response==null)
    {
     // alert("groupe existant")
     this.toastr.warning("Ce groupe existe déjà ")
    }
    else{


    console.log(response);
    console.log(this.g)
this.toastr.success(`Groupe ${this.g.nomGroup} a été ajouté avec succèes` )

this.route.navigateByUrl('/group');
    }
  },
 (error:HttpErrorResponse)=>
 {alert(error.message);
}

)
}
}
