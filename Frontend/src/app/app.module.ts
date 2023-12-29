import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import {HeaderComponent} from "./header/header.component";
import {TabViewModule} from "primeng/tabview";
import {SharedModule} from "primeng/api";
import {BasicContainerComponent} from "./basic-container/basic-container.component";
import {BrandingComponent} from "./branding/branding.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    SharedModule,
    BasicContainerComponent,
    BrandingComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
