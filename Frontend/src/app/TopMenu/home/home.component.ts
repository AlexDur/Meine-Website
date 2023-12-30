import {Component, OnInit} from '@angular/core';

import {SharedModule} from "../../shared/shared.module";
import {TranslateService} from "../../shared/services/translate.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  translationsLoaded = false;


  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.use('de').subscribe(() => {
      this.translationsLoaded = true;
    });
  }
}
