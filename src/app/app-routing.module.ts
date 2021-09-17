import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdministratifComponent } from './accueil-administratif/accueil-administratif.component';
import { AddGrpComponent } from './add-grp/add-grp.component';
import { AddComponent } from './add/add.component';
import { EditGrpComponent } from './edit-grp/edit-grp.component';
import { EditComponent } from './edit/edit.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'EspaceAdministratif',component:AccueilAdministratifComponent},
  {path:'person',component:PersonComponent},
  {path:'structure',component:StructureComponent},
  {path:'group',component:GroupComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'addEmp',component:AddComponent},
  {path:'addGrp',component:AddGrpComponent},
  {path:'editGrp',component:EditGrpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
