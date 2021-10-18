import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MinistereService } from '../ministere.service';
import { Structure } from '../structure';

@Component({
  selector: 'app-edit-struct',
  templateUrl: './edit-struct.component.html',
  styleUrls: ['./edit-struct.component.css']
})
export class EditStructComponent implements OnInit {

  p="null"
  str: Structure=new Structure();
  struct:Structure
 structure:Structure[]
  formStructure:FormGroup
  constructor(private router:Router,private route:ActivatedRoute,private toastr:ToastrService,private fb:FormBuilder,private structServ:MinistereService) {
    this.formStructure=this.fb.group(
      {  code:[,
         [Validators.required]
         ],
           nomStructure:[,
         [Validators.required]
         ],
         nomStructure_ar:[,
         [Validators.required]],

         emailStr:[ ,
         [Validators.required,Validators.email]
         ],
         numTele:[ ,
         [Validators.required]
         ],
         adresseWeb:['',
         [Validators.required]
         ],
         adresseSoc:['',
         [Validators.required]
         ],
         StructureParente:['',
         [Validators.required]
         ]
     }
   )

  }
   ngOnInit(): void {

     this.getAllstr()
     this.structServ.findMinis(this.route.snapshot.params.id).subscribe(
       (response:Structure)=>{
      this.formStructure=this.fb.group(
        {  code:[response.structure_id,
           [Validators.required]
           ],
             nomStructure:[response.nomStructure,
           [Validators.required]
           ],
           nomStructure_ar:[response.nomARStructure,
           [Validators.required]],

           emailStr:[response.emailStruct,
           [Validators.required,Validators.email]
           ],
           numTele:[response.numTel_Struct,
           [Validators.required]
           ],
           adresseWeb:[response.site_Struct,
           [Validators.required]
           ],
           adresseSoc:[response.adresseStruct,
           [Validators.required]
           ],
           StructureParente:[response.parentStruct,
           [Validators.required]
           ]
       }
     )
     })



  }


getNomstruct()
{
  return this.formStructure.get('nomStructure')?.value
}
getNomar()
{
  return this.formStructure.get('nomStructure_ar')?.value
}
getemail(){
  return this.formStructure.get('emailStr')?.value
}
getnumTele()
{
  return this.formStructure.get('numTele')?.value
}
getAdresseWeb()
{
  return this.formStructure.get('adresseWeb')?.value
}
getAdresseSoc()
{
  return this.formStructure.get('adresseSoc')?.value
}
getMin()
{
  return this.formStructure.get('StructureParente')?.value
}
getCode()
{
  return this.formStructure.get('code')?.value
}

 editStructure()
{
  this.str.adresseStruct=this.getAdresseSoc()
  this.str.structure_id=this.getCode()
  this.str.nomARStructure=this.getNomar()
  this.str.nomStructure=this.getNomstruct()
  this.str.emailStruct=this.getemail()
  this.str.numTel_Struct=this.getnumTele()
  this.str.site_Struct=this.getAdresseWeb()
  this.str.parentStruct=this.getMin()
  console.log(this.str)
this.structServ.updateMinistere(this.str).subscribe((res:Structure)=>{
console.log(res)
this.toastr.info(`la structure ${this.str.nomStructure} a été modifié avec succèes`)
this.router.navigateByUrl('/structure');
},
(error:HttpErrorResponse)=>
{this.toastr.warning("Echec")

  })}
  getAllstr()
  {
    this.structServ.getAllMinistere().subscribe(
      (res:Structure[])=>{
this.structure=res
      }
    )
  }

}
