import { Component } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {AsyncPipe} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';

@Component({
  selector: 'app-services-arbeitsweise',
  standalone: true,
  imports: [
    AccordionModule,
    AsyncPipe,
    SharedModule
  ],
  templateUrl: './services-arbeitsweise.component.html',
  styleUrl: './services-arbeitsweise.component.scss'
})
export class ServicesArbeitsweiseComponent {


}
