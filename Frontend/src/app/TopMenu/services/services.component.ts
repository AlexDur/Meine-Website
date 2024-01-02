import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../shared/services/translate.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    SharedModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{
  translationsLoaded: boolean = false;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.use('de').subscribe(() => {
      this.translationsLoaded = true;
    });
  }
}
