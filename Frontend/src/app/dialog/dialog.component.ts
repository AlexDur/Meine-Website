import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  dialogVisible: boolean = false;


  ngOnInit() {
    this.checkFirstVisit();
  }

  checkFirstVisit() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      this.dialogVisible = true;
      localStorage.setItem('hasVisited', 'true'); // Setzen des Schlüssels im lokalen Speicher
    }
  }
  closeDialog() {
    this.dialogVisible = false;
  }
}
