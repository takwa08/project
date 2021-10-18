import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdministratifComponent } from './accueil-administratif/accueil-administratif.component';
import { AddEmpToGrpComponent } from './add-emp-to-grp/add-emp-to-grp.component';
import { AddGrpComponent } from './add-grp/add-grp.component';
import { AddStructComponent } from './add-struct/add-struct.component';
import { AddComponent } from './add/add.component';
import { DetailGrpComponent } from './detail-grp/detail-grp.component';
import { DetailStructureComponent } from './detail-structure/detail-structure.component';
import { DetailsComponent } from './details/details.component';
import { EditGrpComponent } from './edit-grp/edit-grp.component';
import { EditStructComponent } from './edit-struct/edit-struct.component';

import { EditComponent } from './edit/edit.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { LogAuthGuard } from './log-auth.guard';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { StatusOnGuard } from './status-on.guard';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent,},
  {path:'EspaceAdministratif',component:AccueilAdministratifComponent,canActivate:[LogAuthGuard]},
  {path:'person',component:PersonComponent,canActivate:[LogAuthGuard]},
  {path:'structure',component:StructureComponent,canActivate:[LogAuthGuard]},
  {path:'group',component:GroupComponent,canActivate:[LogAuthGuard]},
  {path:'edit/:id',component:EditComponent,canActivate:[LogAuthGuard]},
  {path:'addEmp',component:AddComponent,canActivate:[LogAuthGuard]},
  {path:'addGrp',component:AddGrpComponent,canActivate:[LogAuthGuard]},
  {path:'editGrp/:id',component:EditGrpComponent,canActivate:[LogAuthGuard]},
  {path:'addStruct',component:AddStructComponent,canActivate:[LogAuthGuard]},
  {path:'detailStructure/:id',component:DetailStructureComponent,canActivate:[LogAuthGuard]},
  {path:'details/:id',component:DetailsComponent,canActivate:[LogAuthGuard]},
  {path:'editStruct/:id',component:EditStructComponent,canActivate:[LogAuthGuard]},
  {path:'affectEmp',component:AddEmpToGrpComponent,canActivate:[LogAuthGuard]},
  {path:'detailsGrp/:id',component:DetailGrpComponent,canActivate:[LogAuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
