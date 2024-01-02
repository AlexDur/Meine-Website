import {Component, OnInit} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {TranslateService} from '../../shared/services/translate.service';
import {CodePrinzipienComponent} from "./code-prinzipien/code-prinzipien.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    CodePrinzipienComponent,
    FooterComponent
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
