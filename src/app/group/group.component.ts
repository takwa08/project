
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
Gr:Group[];
g1:Group
  constructor(private grpService:GroupService) {

  }


  public getGrp():void
  {
     //  console.log(this.getGrp())

  this.grpService.getAllGrp().subscribe
  (
   ( res:Group[])=>

  {
    this.Gr=res;
    console.log(res)
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

  public deleteGrp(nom:String)
  {
    this.grpService.deleteGroupe(nom).subscribe(
   () =>   {this.getGrp()   },

   (error:HttpErrorResponse)=>{
     alert(error.message);
     console.log(error)
   }
   );}


   public routeId(n:number)
   {
     this.grpService.findByIdGrp(n).subscribe(
       (res:Group)=>{
        this.g1=res; },
        (error:HttpErrorResponse)=>{
          alert(error.message);
          console.log(error)
        }
        );}}
