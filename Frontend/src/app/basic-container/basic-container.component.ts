import {Component, OnInit} from '@angular/core';
import {BasicContainerService} from "../services/basic-container.service";
import {async} from "rxjs";
import {SharedModule} from "../shared/shared.module";

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
  basicContainer: any;

  constructor(private basicContainerService: BasicContainerService) { }

  ngOnInit() {
    this.basicContainer = this.basicContainerService.getBasicContainer();
  }

}
