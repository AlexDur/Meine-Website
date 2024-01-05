import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../../shared/services/translate.service';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {BadgeModule} from 'primeng/badge';
import {CommonModule} from '@angular/common';


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

  tabContents = [
    { left: 'image', right: 'text', imageUrl: '...', title: 'tabs.tab1.title', description: 'tabs.tab1.text' },
    { left: 'text', right: 'image', imageUrl: '...', title: 'tabs.tab2.title', description: 'tabs.tab2.text' },
    { left: 'image', right: 'text', imageUrl: '...', title: 'tabs.tab3.title', description: 'tabs.tab3.text' },
    { left: 'text', right: 'image', imageUrl: '...', title: 'tabs.tab4.title', description: 'tabs.tab4.text' },
  ];

  onTabChange(event: any) {
    if (this.items) {
      this.activeTabIndex = event.index;
      console.log('Aktiver Tab-Index geändert:', this.activeTabIndex);
      this.activeItem = this.items[this.activeTabIndex];
    }
  }

  //  `activeTabIndex`, um den Inhalt des aktiven Tabs anzuzeigen.
  getActiveTabContent(): any {
    const content = this.tabContents[this.activeTabIndex];
    console.log('Aktiver Tab-Inhalt:', content);
    return content;
  }


}
