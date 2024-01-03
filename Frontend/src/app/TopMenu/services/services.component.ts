import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '../../shared/services/translate.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    SharedModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit, OnDestroy {
  translationsLoaded: boolean = false;
  private subscription: Subscription | null = null;


  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.subscription = this.translateService.use('de').subscribe(() => {
      this.translationsLoaded = true;
      console.log('Translations loaded', this.translateService);
    });
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
