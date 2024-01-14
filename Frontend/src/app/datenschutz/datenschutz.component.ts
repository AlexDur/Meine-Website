import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import {TranslateService} from '../shared/services/translate.service';
import {Router} from '@angular/router';
import {AsyncPipe, NgIf} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    SharedModule
  ],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {
  loaded: boolean = false;
  private subscription: Subscription | null = null;


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
}
