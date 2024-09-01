import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {Subscription} from 'rxjs';
import {TranslateService} from '../../../shared/services/translate.service';

@Component({
  selector: 'app-services-grafik',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './services-grafik.component.html',
  styleUrl: './services-grafik.component.scss'
})
export class ServicesGrafikComponent {
  loaded: boolean = false;
  listOpen1 = false;
  listOpen2 = false;
  listOpen3 = false;
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService) {}

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
