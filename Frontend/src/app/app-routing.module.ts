import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './TopMenu/home/home.component';
import {ServicesComponent} from './TopMenu/services/services.component';
import {ProjekteComponent} from './TopMenu/projekte/projekte.component';
import {KontaktComponent} from './TopMenu/kontakt/kontakt.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {FaqComponent} from './footer/faq/faq.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./TopMenu/about/about.module').then(m => m.AboutModule) },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: ProjekteComponent },
  { path: 'contact', component: KontaktComponent },
  { path: 'legal-notice', component: ImpressumComponent },
  { path: 'data-protection', component: DatenschutzComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
