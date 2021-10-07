import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilAdministratifComponent } from './accueil-administratif/accueil-administratif.component';
import { PersonComponent } from './person/person.component';
import { GroupComponent } from './group/group.component';
import { StructureComponent } from './structure/structure.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { Nav1Component } from './nav1/nav1.component';
import { AddGrpComponent } from './add-grp/add-grp.component';
import { EditGrpComponent } from './edit-grp/edit-grp.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddStructComponent } from './add-struct/add-struct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilAdministratifComponent,
    PersonComponent,
    GroupComponent,
    StructureComponent,
    FooterComponent,
    NavbarComponent,
    EditComponent,
    HomeComponent,
    AddComponent,
    Nav1Component,
    AddGrpComponent,
    EditGrpComponent,
    AddStructComponent,

  ],
  imports: [
FormsModule,
ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
