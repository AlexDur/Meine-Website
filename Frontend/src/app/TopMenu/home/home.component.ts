import {Component, OnDestroy, OnInit} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {TranslateService} from '../../shared/services/translate.service';
import {CodePrinzipienComponent} from '../about/code-prinzipien/code-prinzipien.component';
import {FooterComponent} from '../../footer/footer.component';
import {ProjekteComponent} from '../projekte/projekte.component';
import {KurzVorstellungComponent} from '../about/kurz-vorstellung/kurz-vorstellung.component';
import {BrandingComponent} from '../../branding/branding.component';
import {ButtonModule} from 'primeng/button';
import {Router} from '@angular/router';
import {async, Subscription} from 'rxjs';
import {IntroComponent} from '../about/intro/intro.component';
import {TechstackComponent} from '../about/techstack/techstack.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    CodePrinzipienComponent,
    FooterComponent,
    ProjekteComponent,
    KurzVorstellungComponent,
    BrandingComponent,
    ButtonModule,
    IntroComponent,
    TechstackComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

/**
*Komponente zur Darstellung der Startseite der Webseite.
*/
export class HomeComponent implements OnInit, OnDestroy {
  loaded: boolean = false;
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.translateService.areTranslationsLoaded().subscribe(loaded => {
      this.loaded = loaded;
    });
  }

  /* navigateToContact() {
    this.router.navigateByUrl('/contact');
  }*/

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected readonly async = async;
}
