import { HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ministere } from '../ministere';
import { MinistereService } from '../ministere.service';
import { PersonService } from '../person.service';
import { Societe } from '../societe';
import { SocieteService } from '../societe.service';
import { Utilisateur } from '../Utilisateur';
import { NavbarComponent } from '../navbar/navbar.component';
import { StructureService } from '../structure.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
ministeres:Ministere[]=[]
  constructor(private servMinistere:  MinistereService) {
   }

  ngOnInit(): void {this.getMinistere()}
  public getMinistere()
  {
    this.servMinistere.getMinistere().subscribe(
      (res:Ministere[])=>
      {
this.ministeres=res;
console.log(this.ministeres)
      }
    )
  }
  }
