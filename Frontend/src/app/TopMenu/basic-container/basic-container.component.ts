import {Component, OnInit} from '@angular/core';

import {SharedModule} from "../../shared/shared.module";
import {TranslateService} from "../../shared/services/translate.service";

@Component({
  selector: 'app-basic-container',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './basic-container.component.html',
  styleUrl: './basic-container.component.scss'
})
export class BasicContainerComponent implements OnInit{
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.use('de').subscribe();
  }
}
