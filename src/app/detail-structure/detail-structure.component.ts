import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MinistereService } from '../ministere.service';
import { Structure } from '../structure';

@Component({
  selector: 'app-detail-structure',
  templateUrl: './detail-structure.component.html',
  styleUrls: ['./detail-structure.component.css']
})
export class DetailStructureComponent implements OnInit {
Min:Structure=new Structure()
p:Structure=new Structure()
  constructor(private router:ActivatedRoute,private servStructure:MinistereService) { }

  ngOnInit(): void {
    this.findP()
    this.findById()
  }
  findById()
  {
    this.servStructure.findMinis(this.router.snapshot.params.id).subscribe
    ((res:any)=>
    {
      this.Min=res
     console.log(this.Min)
    })
  }

findP()
{
  this.servStructure.findParentStructByID(this.router.snapshot.params.id).subscribe((res:Structure)=>{
this.p=res
console.log(this.p)
  })
}

}
