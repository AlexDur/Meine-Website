import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '../../shared/services/translate.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {Subscription} from 'rxjs';

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

export class ProjekteComponent implements OnInit, OnDestroy{
  loaded: boolean = false;
  private subscription: Subscription | null = null;

  cards = [
    {
      image: 'assets/images/dishlist1.png',
      header: 'Desktop/mobile App',
      title: 'DishList',
      content: 'Eine Webanwendung mit der Rezepte, die man im Web findet, in einer Sammlung anlegen und mit zusätzlichen Information beschreiben kann.',
      button: {
        text: 'Mehr erfahren',
        link: '/dishlist'
      }
    },
    {
      image: 'assets/images/komprimiert_beetgott1.png',
      header: 'Mobile App',
      title: 'Beetgott',
      content: 'Eine mobile App, mit deren Hilfe das eigene Beet so geplant werden kann, dass der Anbau einen höheren Ertrag liefert.',
      button: {
        text: 'Jetzt starten',
        link: '/beetgott'
      }
    },
    {
      image: 'assets/images/tokyo.png',
      header: 'Website',
      title: 'Überschrift 3',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      button: {
        text: 'Mehr Informationen',
        link: '/link-zu-card-3'
      }
    }
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.subscription = this.translateService.use('de').subscribe(() => {
      this.loaded = true;
    });
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
