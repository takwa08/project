import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MinistereService } from '../ministere.service';
import { ToastrService } from 'ngx-toastr';
import { Structure } from '../structure';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
struct:Structure[]=[]
  constructor(private toastr:ToastrService,private servStruct:  MinistereService) {
   }

  ngOnInit(): void {this.getall() }
getall()
{
  this.servStruct.getAllMinistere().subscribe((res:Structure[])=>
  {
    this.struct=res
    console.log(this.struct)
  })

  }


deleteStr(id:number)
{
this.servStruct.removeStructure(id).subscribe(()=>{
  this.getall()
  this.toastr.success('Suppression reussite')

}),
(error:HttpHeaderResponse)=>{

 if(error.status==400)
 { this.toastr.error('Echec de suppression')}

if(error.status==500)
{ this.toastr.warning('Echec de suppression cette structure est lié avec des autres structures ')}
};
}
  }

