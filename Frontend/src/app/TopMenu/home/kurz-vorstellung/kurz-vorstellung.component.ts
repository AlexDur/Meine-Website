import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../../shared/services/translate.service';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {BadgeModule} from 'primeng/badge';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";

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
export class KurzVorstellungComponent implements OnInit{
  translationsLoaded: boolean = false;
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  activeTabIndex: number = 1;

  tabContents = [
    { left: 'image', right: 'text', imageUrl: '...', titleKey: 'tabs.tab1.title', textKey: 'tabs.tab1.text' },
    { left: 'text', right: 'image', imageUrl: '...', titleKey: 'tabs.tab2.title', textKey: 'tabs.tab2.text' },
    { left: 'image', right: 'text', imageUrl: '...', titleKey: 'tabs.tab3.title', textKey: 'tabs.tab3.text' },
    { left: 'text', right: 'image', imageUrl: '...', titleKey: 'tabs.tab4.title', textKey: 'tabs.tab4.text' },
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.use('de').subscribe(() => {
      this.translationsLoaded = true;
    });


    /*TODO: Dynamisch aus Jsons ladbar machen*/
    this.items = [
      { label: 'Wer bin ich?', icon: 'pi pi-user' },
      { label: 'Was mache ich?', icon: 'pi pi-play' },
      { label: 'Was habe ich gemacht?', icon: 'pi pi-table' },
      { label: 'Mein Standort', icon: 'pi pi-home' },
    ];

    this.activeItem = this.items[0];
  }

  onTabChange(event: any) {
    this.activeTabIndex = event;
    if (this.items) {
      this.activeItem = this.items[this.activeTabIndex];
    }
  }

  getTranslation(key: string): Observable<string> {
    return this.translateService.translate(key);
  }

  //  `activeTabIndex`, um den Inhalt des aktiven Tabs anzuzeigen.
  getActiveTabContent(): any {
    // Logik, um den aktiven Tab-Inhalt zu bestimmen
    return this.tabContents[0]; // Beispiel
  }

}
