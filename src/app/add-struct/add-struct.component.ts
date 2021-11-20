import { HttpErrorResponse } from '@angular/common/http';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MinistereService } from '../ministere.service';
import { Structure } from '../structure';

@Component({
  selector: 'app-add-struct',
  templateUrl: './add-struct.component.html',
  styleUrls: ['./add-struct.component.css']
})
export class AddStructComponent implements OnInit {
  p="null"
  str: Structure=new Structure();
  struct:Structure
 structure:Structure[]
  formStructure:FormGroup
  constructor(private router:Router,private toastr:ToastrService,private fb:FormBuilder,private structServ:MinistereService) {
   }
   ngOnInit(): void {

     this.getAllstr()
    this.formStructure=this.fb.group(
      {  code:['',
         [Validators.required]
         ],
           nomStructure:['',
         [Validators.required]
         ],
         nomStructure_ar:['',
         [Validators.required]],

         emailStr:['',
         [Validators.required,Validators.email]
         ],
         numTele:['',
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

 addStructure()
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
this.structServ.ajouterMinistere(this.str).subscribe((res:Structure)=>{
console.log(res)
this.toastr.success(`la structure ${this.str.nomStructure} a été ajouté avec succèes`)
this.router.navigateByUrl('/structure');
},
(error:HttpErrorResponse)=>
{this.toastr.warning("Echec d'ajout veuillez verifier vos données")

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
