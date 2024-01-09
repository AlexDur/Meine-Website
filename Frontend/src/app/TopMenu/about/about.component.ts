import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {TranslateService} from '../../shared/services/translate.service';
import {Subscription} from 'rxjs';

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
export class AboutComponent implements OnInit, OnDestroy {
  loaded: boolean = false;
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.subscription = this.translateService.areTranslationsLoaded().subscribe(loaded => {
      this.loaded = loaded;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
