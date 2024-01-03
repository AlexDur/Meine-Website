import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../../shared/services/translate.service';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {BadgeModule} from 'primeng/badge';

@Component({
  selector: 'app-kurz-vorstellung',
  standalone: true,
  imports: [
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
  activeTabIndex: number = 0;

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

  //  `activeTabIndex`, um den Inhalt des aktiven Tabs anzuzeigen.
  getActiveTabContent() {
    switch (this.activeTabIndex) {
    case 0:
      return '<img src="../src/logo1_pixel.png" alt="Ein Bild" class="content-image"><p>Inhalt für Tab 1</p>';
    case 1:
      return 'Inhalt für Tab 2';
    case 2:
      return 'Inhalt für Tab 3';
    case 3:
      return 'Inhalt für Tab 4';
    default:
      return null;
    }
  }
}
