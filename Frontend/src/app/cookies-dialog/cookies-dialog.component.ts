import { Component, OnInit } from '@angular/core';
import {Header} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-cookies-dialog',
  templateUrl: './cookies-dialog.component.html',
  standalone: true,
  imports: [
    Header,
    DialogModule,
    ButtonDirective
  ],
  styleUrls: ['./cookies-dialog.component.scss']
})
export class CookieDialogComponent implements OnInit {
  display: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // prüfen, ob bereits eine Entscheidung getroffen wurde
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      this.display = false;
    }
  }

  onAccept(): void {
    localStorage.setItem('cookieConsent', 'accepted');
    this.display = false;
  }

  onDecline(): void {
    localStorage.setItem('cookieConsent', 'declined');
    this.display = false;
  }
}
