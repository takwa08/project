import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
user:Utilisateur
  constructor(private servEmp:PersonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployee()
  }
getEmployee()
{
this.servEmp.findEmpBy(this.router.snapshot.params.id).subscribe(
  (response:any)=>{
this.user=response
console.log(this.user)
  }
),(error:HttpErrorResponse)=>
{
  console.log(error.message)
}
}


}
