import {Component, OnDestroy, OnInit} from '@angular/core';
import {async, Subscription} from 'rxjs';
import {TranslateService} from '../../../shared/services/translate.service';
import {Router} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from '../../../shared/shared.module';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [SharedModule, ButtonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
// eslint-disable-next-line no-undef
export class IntroComponent implements OnInit, OnDestroy{
  loaded: boolean = false;
  private subscription: Subscription | null = null;
  lightboxImageSrc: string | null = null;


  constructor(private translateService: TranslateService, private router: Router) {
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

  toggleZoom(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('zoomed')) {
      target.classList.remove('zoomed'); // Entfernt die Vergrößerung
    } else {
      target.classList.add('zoomed'); // Fügt die Vergrößerung hinzu
    }
  }


  protected readonly async = async;
}
