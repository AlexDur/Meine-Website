import {Component, OnDestroy, OnInit} from '@angular/core';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputGroupModule} from 'primeng/inputgroup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {TranslateService} from '../../shared/services/translate.service';
import {SharedModule} from '../../shared/shared.module';
import {Subscription} from 'rxjs';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [
    InputGroupAddonModule,
    InputGroupModule,
    InputTextareaModule,
    SharedModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent implements OnInit, OnDestroy {
  value!: string;
  loaded: boolean = false;
  formGroup?: FormGroup;
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.subscription = this.translateService.areTranslationsLoaded().subscribe(loaded => {
      this.loaded = loaded;
    });
    this.formGroup = new FormGroup({
      city: new FormControl<string | null>(null)
    });
  }



  /*  anfrage = {
    name: '',
    email: '',
    message: ''
  };*/


  /* onSubmit() { this.http.post('URL_DES_BACKEND-SERVERS', this.anfrage)
    .subscribe(response => {
      console.log('Serverantwort:', response);
    });

  }*/


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected readonly onsubmit = onsubmit;
}
