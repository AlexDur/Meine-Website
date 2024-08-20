import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {HeaderComponent} from './header/header.component';
import {TabViewModule} from 'primeng/tabview';
import {SharedModule} from 'primeng/api';
import {HttpClientModule} from '@angular/common/http';
import {ServicesComponent} from './TopMenu/services/services.component';
import {KontaktComponent} from './TopMenu/kontakt/kontakt.component';
import {ProjekteComponent} from './TopMenu/projekte/projekte.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FooterComponent} from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {KurzVorstellungComponent} from './TopMenu/about/kurz-vorstellung/kurz-vorstellung.component';
import {BadgeModule} from 'primeng/badge';
import {CommonModule} from '@angular/common';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {FormsModule} from '@angular/forms';
import {IntroComponent} from './TopMenu/about/intro/intro.component';
import {TechstackComponent} from './TopMenu/about/techstack/techstack.component';
import {ScrollUpButtonComponent} from './shared/scroll-up-button/scroll-up-button.component';
import {ServicesGrafikComponent} from './TopMenu/services/services-grafik/services-grafik.component';
import {ServicesTechstackComponent} from './TopMenu/services/services-techstack/services-techstack.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServicesArbeitsweiseComponent} from './TopMenu/services/services-arbeitsweise/services-arbeitsweise.component';
import {CookieDialogComponent} from './cookies-dialog/cookies-dialog.component';

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
    ServicesComponent,
    KontaktComponent,
    ProjekteComponent,
    InputTextModule,
    InputTextareaModule,
    FooterComponent,
    ButtonModule,
    KurzVorstellungComponent,
    BadgeModule,
    ToggleButtonModule,
    FormsModule,
    IntroComponent,
    TechstackComponent,
    ScrollUpButtonComponent,
    ServicesGrafikComponent,
    ServicesTechstackComponent,
    ServicesArbeitsweiseComponent,
    BrowserAnimationsModule,
    CookieDialogComponent
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
