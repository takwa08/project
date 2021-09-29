import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../group';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-edit-grp',
  templateUrl: './edit-grp.component.html',
  styleUrls: ['./edit-grp.component.css']
})
export class EditGrpComponent implements OnInit {
form:FormGroup
g:Group=new Group(0,"")
res:boolean=false
  constructor(private fb:FormBuilder,private svr:GroupService,private router:ActivatedRoute) {
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
console.log("updated!")
    this.res=true

  })
}


}
