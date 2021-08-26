import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdministratifComponent } from './accueil-administratif/accueil-administratif.component';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'EspaceAdministratif',component:AccueilAdministratifComponent},
  {path:'person',component:PersonComponent},
  {path:'structure',component:StructureComponent},
  {path:'group',component:GroupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
