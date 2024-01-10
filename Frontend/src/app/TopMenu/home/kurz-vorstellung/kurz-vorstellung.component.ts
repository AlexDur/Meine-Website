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
        this.updateActiveTabContent();
        this.sanitizeUrlsInTabContents();
      }
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
    { left: 'image', right: 'text', imageUrl: 'assets/images/ich_rund.jpg', title: 'Wer bin ich?', description: 'Ich bin Webentwickler mit über drei Jahren professioneller Erfahrung. Meine Expertise liegt sowohl im Frontend als auch im Backend. Das bedeutet, dass ich sowohl die Benutzeroberfläche einer Seite bzw. Anwendung, als auch eine eventuell nötige Datenbankanbindung selbstständig programmiere. Zeit der aufgrund seiner Erfahrung sowohl das Frontend als auch das Backend programmieren kann. Sie erhalten so Ihre Webseite oder App aus einer Hand. Auf diese Weise kann ich Sie beim Erreichen Ihrer Ziele schnell und umfassend unterstützen.' },
    { left: 'text', right: 'image', imageUrl: 'Generische Darstellung', title: 'Was mache ich?', description: 'Meine Ziel ist es, die bestmöglichen Weblösungen zu liefern, die ihre unmittelbaren Bedürfnisse erfüllen und Sie gleichzeitig für zukünftige Chancen positionieren, indem ich Technologie mit Ihrem Geschäftsplänen verknüpfe.' },
    { left: 'image', right: 'text', imageUrl: 'Generische Darstellung', title: 'Was habe ich bereits gemacht?', description: 'In meiner hauptberuflichen Tätigkeit als Fullstack-Entwickler war ich bereits in der Programmierung verschiedener Anwendungen beteiligt. Sowohl im Bereich "Automotive", als auch im staatlichen Kontext sammelte ich bereits weitreichende Erfahrung. Nebenberuflich habe ich für Menschen aus meinem privaten Umfeld verschiedene Programmierarbeiten übernommen, ehe ich nun vor allem auf der Online-Plattform "Upwork" meine Dienstleistung anbiete.' },
    { left: 'text', right: 'map', SafeResourceUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16348.165232134992!2d7.05995756358069!3d50.72780644341006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bee18c168524cb%3A0x63ee0ad03934db43!2sEndenich%2C%20Bonn-Hardtberg!5e0!3m2!1sde!2sde!4v1704769235699!5m2!1sde!2sde',  title: 'Mein Standort', description: 'Ich bin ansäßig in Bonn und profitiere dadurch von der Infrastruktur, die die Region Köln/Bonn Softwareentwicklern bietet. Regelmäßige lokale Entwickler-Treffen und Schulungen ermöglichen es mir im persönlichen Austausch mit anderen IT-Vernarrten neueste Trends und Entwicklungen zu antizipieren.' },
  ];


  sanitizeUrlsInTabContents() {
    this.tabContents = this.tabContents.map(tabContent => {
      if (tabContent.SafeResourceUrl) {
        return { ...tabContent, mapUrl: this.sanitizeUrl(tabContent.SafeResourceUrl) };
      }
      return tabContent;
    });
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

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
