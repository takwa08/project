import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route: Router) {}

  ngOnInit(): void {
  }
  acces()
  {
this._route.navigateByUrl("/login");
  }

}
