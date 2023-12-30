import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {TranslateService} from "../shared/services/translate.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: string | undefined;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    const menuKeys = ['home', 'about', 'services', 'projects', 'contact'];

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
  }
}
