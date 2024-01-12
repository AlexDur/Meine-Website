import {Component, OnDestroy, OnInit} from '@angular/core';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputGroupModule} from 'primeng/inputgroup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {TranslateService} from '../../shared/services/translate.service';
import {SharedModule} from '../../shared/shared.module';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ButtonModule} from "primeng/button";


@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [
    InputGroupAddonModule,
    InputGroupModule,
    InputTextareaModule,
    SharedModule,
    ButtonModule
  ],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent implements OnInit, OnDestroy {
  value!: string;
  loaded: boolean = false;
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService,private http: HttpClient) {
  }

  ngOnInit() {
    this.subscription = this.translateService.areTranslationsLoaded().subscribe(loaded => {
      this.loaded = loaded;
    });
  }

  anfrage = {
    name: '',
    email: '',
    message: ''
  };


  onSubmit() { this.http.post('URL_DES_BACKEND-SERVERS', this.anfrage)
    .subscribe(response => {
      console.log('Serverantwort:', response);
    });

  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
