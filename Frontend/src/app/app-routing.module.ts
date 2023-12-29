import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicContainerComponent} from "./TopMenu/basic-container/basic-container.component";
import {AboutComponent} from "./TopMenu/about/about.component";
import {ServicesComponent} from "./TopMenu/services/services.component";
import {ProjekteComponent} from "./TopMenu/projekte/projekte.component";
import {KontaktComponent} from "./TopMenu/kontakt/kontakt.component";

const routes: Routes = [
  { path: '', component: BasicContainerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projekte', component: ProjekteComponent },
  { path: 'kontakt', component: KontaktComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
