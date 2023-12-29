import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: string | undefined;

  ngOnInit() {
    this.items = [
      {label: 'Home', url: '/'},
      {label: 'About', url: '/about'},
      {label: 'Services', url: '/services'},
      {label: 'Projekte', url: '/projekte'},
      {label: 'Kontakt', url: '/kontakt'},
    ]
  }

  setActiveItem(url: string | undefined) {
    this.activeItem = url;
  }
}
