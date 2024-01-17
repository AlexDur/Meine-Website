import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {Subscription} from 'rxjs';
import {TranslateService} from '../shared/services/translate.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @ViewChild('emailButton', { static: false }) emailButton: ElementRef;
  loaded: boolean = false;
  private subscription: Subscription | null = null;


  constructor(private translateService: TranslateService, private router: Router) {
    this.emailButton = new ElementRef(null);
  }

  ngOnInit() {
    this.subscription = this.translateService.areTranslationsLoaded().subscribe(loaded => {
      this.loaded = loaded;
    });
  }

  openEmailClient() {
    // Erstellen Sie eine E-Mail-Adresse
    const email = 'alexdurach@hotmail.de';

    // Öffnen Sie ein E-Mail-Fach mit der E-Mail-Adresse als Empfänger
    window.location.href = `mailto:${  email}`;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
