import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ministere } from '../ministere';
import { MinistereService } from '../ministere.service';
import { Societe } from '../societe';
import { SocieteService } from '../societe.service';

@Component({
  selector: 'app-add-struct',
  templateUrl: './add-struct.component.html',
  styleUrls: ['./add-struct.component.css']
})
export class AddStructComponent implements OnInit {
  s=new Societe(0,"","",0,"",new Ministere(0,"","","",0,""))
  ministeres:Ministere[]=[]
form:FormGroup
  constructor(private fb:FormBuilder,private servSociete:SocieteService,private servMin:MinistereService) {
    this.form=this.fb.group(
      {
        code:['',
        [Validators.required,Validators.minLength(2)]
        ],
          nomStructure:['',
          [Validators.required,Validators.minLength(2)]
          ],
          nomStructure_ar:['',
          [Validators.required,Validators.minLength(2)]],

          emailStr:['',
          [Validators.required,Validators.minLength(2)]
          ],
          numTele:['',
          [Validators.required]
          ],
          adresseWeb:['',
          [Validators.required,Validators.maxLength(10)]
          ],
          StructureParente:['',
          [Validators.required,Validators.maxLength(10)]
          ]
      }
    )
   }
   getAllMin()
   {
      this.servMin.getMinistere()
      .subscribe(
        (Min:Ministere[])=>{
            this.ministeres=Min;
            console.log(Min)
        }
      )
   }

getNomstruct()
{
  return this.form.get('nomStructure')?.value
}
getNomar()
{
  return this.form.get('nomStructure_ar')?.value
}
getemail(){
  return this.form.get('email')?.value
}
getnumTele()
{
  return this.form.get('numTele')?.value
}
getAdresseWeb()
{
  return this.form.get('adresseWeb')?.value
}
getMin()
{
  return this.form.get('StructureParente')?.value
}
getCode()
{
  return this.form.get('code')?.value
}
  ngOnInit(): void {
    this.getAllMin()
  }
  public addSociet()
  {this.s.societe_id=this.getCode()
    this.s.nomSociete=this.getNomstruct()
    this.s.numTel_Soc=this.getnumTele()
    this.s.nomSoc_ar=this.getNomar()
    this.s.site_Soc=this.getAdresseWeb()
    this.s.ministere=this.getMin()
this.servSociete.addSociete(this.s).subscribe
    (
      (res:Societe)=>{
console.log(res)

      },
      (error:HttpErrorResponse)=>
      {alert(error.message);
     }

    )
  }

}
