import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import {TranslateService} from '../shared/services/translate.service';
import {Router} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
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
