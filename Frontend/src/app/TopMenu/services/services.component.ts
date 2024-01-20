import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '../../shared/services/translate.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {Subscription} from 'rxjs';
import {TechstackComponent} from '../about/techstack/techstack.component';
import {AccordionModule} from 'primeng/accordion';
import {ServicesGrafikComponent} from "./services-grafik/services-grafik.component";
import {ServicesTechstackComponent} from "./services-techstack/services-techstack.component";
import {
  ServicesOptimierungHostingComponent
} from "./services-optimierung-hosting/services-optimierung-hosting.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    SharedModule,
    TechstackComponent,
    AccordionModule,
    ServicesGrafikComponent,
    ServicesTechstackComponent,
    ServicesOptimierungHostingComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit, OnDestroy {
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
