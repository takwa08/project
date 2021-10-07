import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { Utilisateur } from '../Utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { ToastrService } from 'ngx-toastr';
import { Societe } from '../societe';
import { Ministere } from '../ministere';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
form:FormGroup
Gr:Group[]=[]
gr:Group=new Group(0,"");
user:Utilisateur=new Utilisateur(0,"","","","",0,"","","","","","",new Group(0,""),new Societe(0,"","",0,"",new Ministere(0,"","","",0,"")))
// u= new Utilisateur();


  constructor(private personSer:PersonService,private router:ActivatedRoute,private fb:FormBuilder,private grpService:GroupService,private toastr:ToastrService,private route:Router) {
    this.form=this.fb.group(
      {
      nom:['',
        [Validators.required,Validators.minLength(2)]
      ],
      prenom:['',
      [Validators.required,Validators.minLength(2)]],
      nom_ar:['',
        [Validators.required,Validators.minLength(2)]
      ],
      prenom_ar:['',
      [Validators.required,Validators.minLength(2)]
      ],
      matricule:['',
      [Validators.required,Validators.maxLength(10)]
      ],
      age:['',
      [Validators.required,Validators.minLength(2)]
      ],
      email:['',
      [Validators.required,Validators.email,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      codeP:['',
      [Validators.required,Validators.maxLength(4)]
      ],
      numTele:['',
      [Validators.required,Validators.maxLength(8)]
      ],
      adresse:['',
      [Validators.required]
      ],
      ville:['',
      [Validators.required]
      ],
      description:['',
      [Validators.required,Validators.maxLength(150)]
      ],
      group:['',
      [Validators.required]
      ],
      }

    )
  }

  ngOnInit(): void {
   // console.log(this.router.snapshot.params.id);
   this.personSer.findEmpBy(this.router.snapshot.params.id);
  this.getGrp()

   this.personSer.findEmpBy(this.router.snapshot.params.id).subscribe
   (
     ( response:Utilisateur)=>
     {
       this.form=this.fb.group(
         {
         nom:[response.nom,
           [Validators.required,Validators.minLength(2)]
         ],
         prenom:[response.prenom,
         [Validators.required,Validators.minLength(2)]],
         nom_ar:[response.nom_ar,
           [Validators.required,Validators.minLength(2)]
         ],
         prenom_ar:[response.prenom_ar,
         [Validators.required,Validators.minLength(2)]
         ],
         matricule:[response.matricule,
         [Validators.required,Validators.maxLength(10)]
         ],
         age:[response.age,
         [Validators.required,Validators.minLength(2)]
         ],
         email:[response.email,
         [Validators.required,Validators.email,
         Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
         codeP:[response.codeP,
         [Validators.required,Validators.maxLength(4)]
         ],
         numTele:[response.numTele,
         [Validators.required,Validators.maxLength(8)]
         ],
         adresse:[response.adresse,
         [Validators.required]
         ],
         ville:[response.ville,
         [Validators.required]
         ],
         description:[response.description,
         [Validators.required,Validators.maxLength(150)]
         ],
         group:[response.group,
         [Validators.required]
         ],
         }

       )

     },
     (error:HttpErrorResponse)=>{
       alert(error.message);
     });
     //document.getElementById('matricule')?.ariaDisabled
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


  editEmp()
  {

console.log(this.user)
this.user.matricule=this.mat()?.value
this.user.nom=this.getNom()?.value
this.user.prenom=this.getPre()?.value
this.user.nom_ar=this.getN_ar()?.value
this.user.prenom_ar=this.getP_ar()?.value
this.user.age=this.age()?.value
this.user.description=this.getdes()?.value
this.user.codeP=this.getCode()?.value
this.user.email=this.getEmail()?.value
this.user.numTele=this.getNumT()?.value
this.user.adresse=this.getAdresse()?.value
this.user.ville=this.getVille()?.value
this.user.group=this.getGr()?.value


    this.personSer.updateEmp(this.user).subscribe
    ((response:Utilisateur)=>{
    this.toastr.success(`${this.user.nom} ${this.user.prenom} L'employé a étè modifier avec succées `)
    this.route.navigateByUrl('/person')
      console.log('done bb')
      console.log(response)


    })
    }


getNom(){
  return this.form.get('nom')
}
getPre(){
  return this.form.get('prenom')
}

getN_ar()
{
  return this.form.get('nom_ar')
}
getP_ar()
{
  return this.form.get('prenom_ar')
}
mat()
{
  return this.form.get('matricule')
}
age()
{
  return this.form.get('age')
}
getdes()
{
  return this.form.get('description')
}

getEmail(){
  return this.form.get('email')
}
getCode()
{
  return this.form.get('codeP')
}
getNumT()
{
  return this.form.get('numTele')
}
getAdresse()
{
  return this.form.get("adresse")
}
getVille()
{
  return this.form.get('ville')
}
getGr()
{
  return  this.form.get('group')
}
}

