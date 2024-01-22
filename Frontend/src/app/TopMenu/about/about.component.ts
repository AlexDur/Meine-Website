import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {TranslateService} from '../../shared/services/translate.service';
import {Subscription} from 'rxjs';
import {IntroComponent} from './intro/intro.component';
import {ProjekteComponent} from '../projekte/projekte.component';
import {TechstackComponent} from './techstack/techstack.component';
import {KurzVorstellungComponent} from './kurz-vorstellung/kurz-vorstellung.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AsyncPipe,
    SharedModule,
    IntroComponent,
    ProjekteComponent,
    TechstackComponent,
    KurzVorstellungComponent
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
