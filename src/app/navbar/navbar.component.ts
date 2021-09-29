import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
nav:string[]

  constructor(private route :Router ) {}

  ngOnInit(): void {
  }
  back()
  {
    this.route.url==="edit"
  }

}
