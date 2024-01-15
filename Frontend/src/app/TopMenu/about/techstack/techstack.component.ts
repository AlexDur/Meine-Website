import {Component, HostListener} from '@angular/core';
import {Subscription} from 'rxjs';
import {TranslateService} from '../../../shared/services/translate.service';
import {SharedModule} from 'primeng/api';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.scss'
})
export class TechstackComponent {
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
