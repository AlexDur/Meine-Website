import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './TopMenu/home/home.component';
import {AboutComponent} from './TopMenu/about/about.component';
import {ServicesComponent} from './TopMenu/services/services.component';
import {ProjekteComponent} from './TopMenu/projekte/projekte.component';
import {KontaktComponent} from './TopMenu/kontakt/kontakt.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: ProjekteComponent },
  { path: 'contact', component: KontaktComponent },
  { path: 'legal-notice', component: ImpressumComponent },
  { path: 'data-protection', component: DatenschutzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
