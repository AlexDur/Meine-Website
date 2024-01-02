import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {HeaderComponent} from './header/header.component';
import {TabViewModule} from 'primeng/tabview';
import {Footer, SharedModule} from 'primeng/api';
import {HomeComponent} from './TopMenu/home/home.component';
import {BrandingComponent} from './branding/branding.component';
import {HttpClientModule} from '@angular/common/http';
import {AboutComponent} from './TopMenu/about/about.component';
import {ServicesComponent} from './TopMenu/services/services.component';
import {KontaktComponent} from './TopMenu/kontakt/kontakt.component';
import {ProjekteComponent} from './TopMenu/projekte/projekte.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CodePrinzipienComponent} from './TopMenu/home/code-prinzipien/code-prinzipien.component';
import {FooterComponent} from './footer/footer.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    SharedModule,
    HomeComponent,
    BrandingComponent,
    AboutComponent,
    ServicesComponent,
    KontaktComponent,
    ProjekteComponent,
    InputTextModule,
    InputTextareaModule,
    CodePrinzipienComponent,
    FooterComponent,
    ButtonModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
