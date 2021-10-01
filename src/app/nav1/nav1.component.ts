import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  Decon ()
  {

    //localStorage.removeItem('AdminEspace');
    localStorage.removeItem('isConnected');
  //  sessionStorage.removeItem('Logname')
      this.route.navigateByUrl('/');


  }

}
