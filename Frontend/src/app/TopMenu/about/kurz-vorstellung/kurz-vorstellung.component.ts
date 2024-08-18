import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '../../../shared/services/translate.service';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {BadgeModule} from 'primeng/badge';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-kurz-vorstellung',
  standalone: true,
  imports: [
    CommonModule,
    TabMenuModule,
    BadgeModule

  ],
  templateUrl: './kurz-vorstellung.component.html',
  styleUrl: './kurz-vorstellung.component.scss'
})
export class KurzVorstellungComponent implements OnInit, OnDestroy{
  loaded: boolean = false;
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  activeTabIndex: number = 0;
  activeTabContent: any;
  private subscription: Subscription | null = null;



  constructor(private translateService: TranslateService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.subscription = this.translateService.areTranslationsLoaded().subscribe(loaded => {
      if (loaded) {
        this.loaded = true;
        this.updateActiveTabContent();
      }
    });

    this.items = [
      { label: 'Berufliche Stationen'},
      { label: 'Ausbildung'},
    ];

    this.activeItem = this.items[0];
  }

  tabContents = [

    {
      type: 'text',
      title: 'Berufliche Stationen',
      description: 'In meiner hauptberuflichen Tätigkeit als Fullstack-Entwickler war ich bereits in der Programmierung verschiedener Anwendungen beteiligt. Sowohl im Bereich "Automotive", als auch im staatlichen Kontext sammelte ich bereits weitreichende Erfahrung. Nebenberuflich habe ich für Menschen aus meinem privaten Umfeld verschiedene Programmierarbeiten übernommen, ehe ich nun vor allem auf der Online-Plattform "Upwork" meine Dienstleistung anbiete.'
    },
    {
      type: 'text',
      title: 'Ausbildung',
      description: 'Uni Hohenheim Agrarwissenschaften 2011-2015 | Universität Wien und Purdue 2015-2020.'
    }
  ];


  updateActiveTabContent() {
    this.activeTabContent = this.getActiveTabContent();
  }

  onTabChange(event: any) {
    console.log('Aktives Tab-Item:', event);

    // Überprüft, ob die 'items'-Liste existiert und das 'event'-Objekt gültig ist
    if (this.items && event) {

      // Finden des Index des 'activeItem' in der 'items'-Liste
      const index = this.items.findIndex(item => item.label === event.label);

      // Überprüft, ob ein gültiger Index gefunden wurde
      // findIndex() gibt std.mäßig "-1" zurück, wenn kein Element gefunden wurde
      // index !== -1 bedeutet, dass ein Element gefunden wurde
      if (index !== -1) {
        this.activeTabIndex = index;
        console.log('Aktiver Tab-Index geändert:', this.activeTabIndex);

        // Aktualisierung des aktiven Inhalts basierend auf dem gefundenen Index
        this.activeItem = event;
        this.updateActiveTabContent();
      } else {
        console.log('Aktiver Tab-Index nicht gefunden.');
      }
    }
  }

  //  `activeTabIndex`, um den Inhalt des aktiven Tabs anzuzeigen.
  getActiveTabContent(): any {
    const content = this.tabContents[this.activeTabIndex];
    console.log('Aktiver Tab-Inhalt:', content);
    return content;
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
