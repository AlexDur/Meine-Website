import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {label: 'Home', url: '/'},
      {label: 'About', url: '/about'},
      {label: 'Services', url: '/services'},
      {label: 'Portfolio', url: '/portfolio'},
      {label: 'Kontakt', url: '/kontakt'},
    ]
  }
}
