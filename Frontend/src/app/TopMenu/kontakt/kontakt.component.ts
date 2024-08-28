import {Component, OnDestroy, OnInit} from '@angular/core';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputGroupModule} from 'primeng/inputgroup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {TranslateService} from '../../shared/services/translate.service';
import {SharedModule} from '../../shared/shared.module';
import {async, Subscription} from 'rxjs';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


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
  loaded: boolean = false;
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService, private http: HttpClient) {
  }

  ngOnInit() {
    this.subscription = this.translateService.areTranslationsLoaded().subscribe(loaded => {
      this.loaded = loaded;
    });
  }

  onSubmit(kontaktForm: NgForm) {
    console.log('Formular abgesendet');
    if (kontaktForm.valid) {
      this.http.post('https://s52tbcrlt5.execute-api.eu-central-1.amazonaws.com/default/Kontakformular-Emailversand', kontaktForm.value)
        .subscribe(response => {
          console.log('Email erfolgreich versendet');
        }, error => {
          console.error('Fehler beim Emailversand', error);
        });
    } else {
      console.error('Formular ungültig');
    }
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
