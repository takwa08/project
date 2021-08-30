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
import {NgForm} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
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
    HomeComponent
  ],
  imports: [
FormsModule,
ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
