import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {Subscription} from 'rxjs';
import {TranslateService} from '../../../shared/services/translate.service';

@Component({
  selector: 'app-code-prinzipien',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './code-prinzipien.component.html',
  styleUrl: './code-prinzipien.component.scss'
})
export class CodePrinzipienComponent implements OnInit, OnDestroy{
  loaded: boolean = false;
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService) {  }

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
