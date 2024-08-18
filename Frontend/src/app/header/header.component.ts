import {Component, OnDestroy, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MenuItem } from 'primeng/api';
import {TranslateService} from '../shared/services/translate.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('emailButton', { static: false }) emailButton: ElementRef;
  items: MenuItem[] = [];
  activeItem: string | undefined;
  loaded: boolean = false;
  menuOpen = false;
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService) {

    this.emailButton = new ElementRef(null);
  }

  ngOnInit() {
    this.subscription = this.translateService.areTranslationsLoaded().subscribe(loaded => {
      if (loaded) {
        this.initializeMenuItems();
      }
    });
    const savedActiveItem = localStorage.getItem('activeMenuItem');
    if (savedActiveItem) {
      this.setActiveItem(savedActiveItem);
    }
  }

  private initializeMenuItems() {
    const menuKeys = ['', 'about', 'services', 'portfolio', 'contact'];

    menuKeys.forEach(key => {
      this.translateService.translate(`menu.${key}`).subscribe(translation => {
        if (!this.items.some(item => item.url === `/${key}`)) {
          this.items.push({ label: translation, url: `/${key}` });
        }
      });
    });
  }

  setActiveItem(url: string | undefined) {
    this.activeItem = url;
    this.menuOpen = false;
  }

  toggleMenu() {
    console.log('Menu toggled');
    this.menuOpen = !this.menuOpen;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
