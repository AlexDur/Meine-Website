import { Component } from '@angular/core';
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";


@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [
    InputGroupAddonModule,
    InputGroupModule
  ],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {

}
