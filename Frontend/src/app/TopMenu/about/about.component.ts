import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {TranslateService} from '../../shared/services/translate.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AsyncPipe,
    SharedModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

/**
 * Komponente zur Darstellung der About-Seite der Webseite.
 */
export class AboutComponent implements OnInit {
  translationsLoaded: boolean = false;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.use('de').subscribe(() => {
      this.translationsLoaded = true;
    });
  }
}
