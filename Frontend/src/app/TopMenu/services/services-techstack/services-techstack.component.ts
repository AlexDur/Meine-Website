import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TranslateService} from '../../../shared/services/translate.service';

@Component({
  selector: 'app-services-techstack',
  standalone: true,
  imports: [],
  templateUrl: './services-techstack.component.html',
  styleUrl: './services-techstack.component.scss'
})
export class ServicesTechstackComponent implements OnInit, OnDestroy{
  loaded: boolean = false;
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
