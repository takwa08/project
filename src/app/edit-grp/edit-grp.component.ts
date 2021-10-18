import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { Structure } from '../structure';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-edit-grp',
  templateUrl: './edit-grp.component.html',
  styleUrls: ['./edit-grp.component.css']
})
export class EditGrpComponent implements OnInit {
form:FormGroup
g:Group=new Group(0,"")
res:boolean=false
  constructor(private route: Router,private fb:FormBuilder,private svr:GroupService,private router:ActivatedRoute,private toastr:ToastrService) {
    this.form=this.fb.group
    ({

        nomGroup: ['',[Validators.required]
      ]}

    );
  }
  get()
  {
    return this.form.get('nomGroup')
  }
  ngOnInit(): void {
this.svr.findByIdGrp(this.router.snapshot.params.id).subscribe
( (response:Group
 )=>{
  this.form=this.fb.group
  ({nomGroup: [response.nomGroup,[Validators.required]
    ]});

 }
)}
update()
{
this.g.idGrp=this.router.snapshot.params.id;
this.g.nomGroup=this.get()?.value

  this.svr.updateGrp(this.g).subscribe((response:Group)=>{
console.log(Group)
//console.log("updated!")
this.toastr.success('Le ,om du groupe à étè modifier avec succées ')
this.route.navigateByUrl("/group")
})
}


}
