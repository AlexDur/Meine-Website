import {Component, OnInit} from '@angular/core';
import {TranslateService} from "./shared/services/translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.use('de').subscribe(); // Standardsprache gesetzt
  }
}
