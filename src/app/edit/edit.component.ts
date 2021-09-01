import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 u=new Utilisateur();
  constructor() { }

  ngOnInit(): void {
  }
Modifier()
{
  
}
}
