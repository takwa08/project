
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { Ministere } from '../ministere';
import { MinistereService } from '../ministere.service';
import { PersonService } from '../person.service';
import { Societe } from '../societe';
import { SocieteService } from '../societe.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

form:FormGroup
  formvalue:string=""
 gr:Group=new Group(0,"");
user:Utilisateur=new Utilisateur(0,"","","","",0,"","","","","","",new Group(0,""),new Societe(0,"","",0,"",new Ministere(0,"","","",0,"")))

Gr: Group[] = [];
selectedOption:string=""
retour:string=""
alert:boolean=false
m:Ministere=new Ministere(0,"","","",0,"")
ministeres:Ministere[]=[]
selected :string=""
selected_:string=""
Societe:Societe[]=[]
Employes:Utilisateur[]=[]
constructor(private personServ:PersonService,private grpService:GroupService,private fb:FormBuilder,private route:Router,private toastr:ToastrService,private servMin:MinistereService,private servSociete:SocieteService,private servEmp:PersonService) {
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
    group:[new Group(0,""),
    [Validators.required]
    ],
    }

  )
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
  ngOnInit(): void {
  this.getGrp()
  }



  Ajouter()
  {
//(this.mat()?.value,this.getNom()?.value,this.getPre()?.value,this.getN_ar()?.value,this.getP_ar()?.value,this.age()?.value,this.getdes()?.value,this.getEmail()?.value,this.getCode()?.value,this.getNumT()?.value,this.getAdresse()?.value,this.getVille()?.value,this.getGr()?.value )

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

this.personServ.addEmp(this.user).subscribe
(

  (response:any)=>{
    console.log(response);
    console.log(this.user)
    this.toastr.info("l'employé a été ajouté avec succèes")
    this.route.navigateByUrl('/person');


  },
 (error:HttpErrorResponse)=>
 {alert(error.message);}

);

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

public getMin()
{
  this.servMin.getMinistere().subscribe(
    (res:Ministere[])=>
    {
      this.ministeres=res
  console.log( this.ministeres)
    },
    (error:HttpErrorResponse)=>{
      alert(error.message)
    }
  )
}
getMinistere()
{
  return this.form.get('ministere')
}
onEvent(event:any)
{

this.selected= event.target.value
console.log(this.selected)
let idMinist_=JSON.parse(this.selected) as Ministere
this.m.Ministere_id=idMinist_.Ministere_id
this.m.nomMinistere=idMinist_.nomMinistere
console.log(this.m)
this.servSociete.findByIdMin(this.m.nomMinistere).subscribe(
(res:Societe[])=>
{
this.Societe=res;
//console.log(this.Societe)
}
),(error:HttpErrorResponse)=>{
alert(error.message)
}

}

Event(event:any){
this.selected_= event.target.value
console.log(this.selected_)
// var e=JSON.stringify(this.selected_)
//var idSo_=JSON.parse(e) as Societe
// let s=new Societe(idSo_.societe_id,idSo_.nomSociete,new Ministere(idSo_.ministere.Ministere_id,idSo_.ministere.nomMinistere))
// this.s.societe_id=idSo_.societe_id
//this.s.nomSociete=idSo_.nomSociete
// console.log(s)
let string =JSON.parse(this.selected_)as String
console.log(string)
this.servEmp.findEmpSoc(string).subscribe(
  (res:Utilisateur[])=>
  {console.log(this.selected_)
    this.Employes=res
    console.log(this.Employes)
  },(error:HttpErrorResponse)=>{
  alert(error.message)
  }
)

}
}

