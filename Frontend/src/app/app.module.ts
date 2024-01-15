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
import {CodePrinzipienComponent} from './TopMenu/about/code-prinzipien/code-prinzipien.component';
import {FooterComponent} from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {KurzVorstellungComponent} from './TopMenu/about/kurz-vorstellung/kurz-vorstellung.component';
import {BadgeModule} from 'primeng/badge';
import {CommonModule} from '@angular/common';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {FormsModule} from '@angular/forms';
import {IntroComponent} from './TopMenu/about/intro/intro.component';
import {TechstackComponent} from './TopMenu/about/techstack/techstack.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
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
    ButtonModule,
    KurzVorstellungComponent,
    BadgeModule,
    ToggleButtonModule,
    FormsModule,
    IntroComponent,
    TechstackComponent
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
