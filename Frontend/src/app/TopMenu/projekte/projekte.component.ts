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
      image: 'assets/images/dishlist-red75.webp',
      header: 'Desktop/Mobile App',
      title: 'DishList',
      content: 'Eine Webanwendung mit der Rezepte, die man im Web findet, in einer Sammlung anlegen und mit zusätzlichen Information beschreiben kann.',
      link: 'https://github.com/AlexDur/Dishlist_2_2024/tree/Branches-vereint'
    },
    {
      image: 'assets/images/komprimiert_beetgott1-red75.webp',
      header: 'Mobile App',
      title: 'Beetguru',
      content: 'Eine mobile App, mit deren Hilfe das eigene Beet so geplant werden kann, dass der Anbau einen höheren Ertrag liefert.',
      link: 'https://github.com/AlexDur/Beetguru'
    },
    {
      image: 'assets/images/ad_rund-red75.png',
      header: 'Chatbot',
      title: 'In Konzeptionsphase',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      link: ''
    }
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.subscription = this.translateService.use('de').subscribe(() => {
      this.loaded = true;
    });
  }

  onCardImageClick(i: number) {
    const url = this.cards[i].link;
    window.open(url, '_blank');  // Öffnet den Link in einem neuen Tab
  }


  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
