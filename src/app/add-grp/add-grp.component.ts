import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Group } from '../group';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-add-grp',
  templateUrl: './add-grp.component.html',
  styleUrls: ['./add-grp.component.css']
})
export class AddGrpComponent implements OnInit {
  res:boolean=false
  constructor(private ServGrp:GroupService) { }

  ngOnInit(): void {

  }
public addG(addGrp:NgForm)
{
this.ServGrp.addG(addGrp.value).subscribe(
  (response:Group)=>{
    this.res=true;

    console.log(response);



  },
 (error:HttpErrorResponse)=>
 {alert(error.message);
}

)
}
}
