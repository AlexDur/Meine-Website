import {Component, OnInit} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {TranslateService} from '../../shared/services/translate.service';
import {CodePrinzipienComponent} from "./code-prinzipien/code-prinzipien.component";
import {FooterComponent} from "../../footer/footer.component";
import {ProjekteComponent} from "../projekte/projekte.component";
import {KurzVorstellungComponent} from "./kurz-vorstellung/kurz-vorstellung.component";
import {BrandingComponent} from "../../branding/branding.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    CodePrinzipienComponent,
    FooterComponent,
    ProjekteComponent,
    KurzVorstellungComponent,
    BrandingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

/**
*Komponente zur Darstellung der Startseite der Webseite.
*/
export class HomeComponent implements OnInit {
  translationsLoaded: boolean = false;


  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.use('de').subscribe(() => {
      this.translationsLoaded = true;
    });
  }
}
