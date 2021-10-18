import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { GroupComponent } from '../group/group.component';
import { Affectation } from '../group_emp';
import { GrpEmpService } from '../grp-emp.service';
import { PersonService } from '../person.service';
import { Structure } from '../structure';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-detail-grp',
  templateUrl: './detail-grp.component.html',
  styleUrls: ['./detail-grp.component.css']
})
export class DetailGrpComponent implements OnInit {
  id=0
  groupe=new Group(1,"")
  nomGp:String=""
  form: FormGroup;
  gr=new Affectation()
  Af:Affectation[]=[]
  employees:Utilisateur[]=[]
  constructor(private router:Router,private Affec:GrpEmpService,private route:ActivatedRoute,private PersonService:PersonService,private fb:FormBuilder,private GrpServ:GroupService,private toastr:ToastrService){
    this.form=this.fb.group
    ({
      employe: ['',[Validators.required]],
      nomGrp:['',[Validators.required]
    ],}

    );
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id
    this.getAllEmp(this.id)
    this.getEmployee()
    this.GrpServ.findByIdGrp(this.route.snapshot.params.id).subscribe((response:Group)=>{
      console.log(response)
     this.nomGp=response.nomGroup
     this.form=this.fb.group
     ({
       employe: ['',[Validators.required]],
       nomGrp:['',[Validators.required]
     ],}

     );

    })
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
  getEmp()
  {
    return this.form.get('employe')?.value;
  }
affecter()
{
this.groupe.idGrp=this.id
this.groupe.nomGroup=this.nomGp
//this.GrpServ.addG()
this.gr.idAffect=0
this.gr.group=this.groupe
this.gr.employees=this.getEmp()
this.Affec.affcterEmp(this.gr).subscribe((resultat:Affectation)=>{
console.log(resultat)
this.router.navigateByUrl(`/group`)
 this.toastr.success("Employé ajouté au groupe")
if(resultat==null)
{
 // alert("groupe existant")
 this.toastr.warning("Employé existe déjà !")
}
})
}


getAllEmp(id:number)
{
  this.Affec.getEmp(id).subscribe((res:Affectation[])=>{

this.Af=res
console.log(this.Af)
  })
}
}
