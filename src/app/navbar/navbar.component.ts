import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
nav:string[]

  constructor(private route :Router ,private toast:ToastrService) {}

  ngOnInit(): void {
  }/*
  back()
  {
    this.route.url==="edit"
  }*/
  Decon ()
  {
  //  localStorage.removeItem('AdminEspace');
    localStorage.removeItem('isConnected');
      this.route.navigateByUrl('/');
      this.toast.success("Deconnexion")


  }

}
