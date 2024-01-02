import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../shared/services/translate.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-projekte',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    SharedModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './projekte.component.html',
  styleUrl: './projekte.component.scss'
})

export class ProjekteComponent implements OnInit{
  translationsLoaded: boolean = false;

  cards = [
    {
      image: 'assets/images/dishlist1.png',
      header: 'Card 1',
      title: 'DishList',
      content: 'Eine Webanwendung mit der man alle Rezepte, die man im Web findet, in einer Sammlung anlegen kann.',
      button: {
        text: 'Mehr erfahren',
        link: '/dishlist'
      }
    },
    {
      image: 'assets/images/komprimiert_beetgott1.png',
      header: 'Card 2',
      title: 'Beetgott',
      content: 'Eine mobile App, mit deren Hilfe das eigene Beet so geplant werden kann, dass der Anbau einen höheren Ertrag liefert.',
      button: {
        text: 'Jetzt starten',
        link: '/beetgott'
      }
    },
    {
      image: 'assets/images/dishlist1.png',
      header: 'Card 3',
      title: 'Überschrift 3',
      content: 'Content of Card 3',
      button: {
        text: 'Mehr Informationen',
        link: '/link-zu-card-3'
      }
    }


  ];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.use('de').subscribe(() => {
      this.translationsLoaded = true;
    });
  }
}
