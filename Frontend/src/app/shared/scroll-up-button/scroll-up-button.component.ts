import {Component, HostListener, NgZone} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-scroll-up-button',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
  ],
  templateUrl: './scroll-up-button.component.html',
  styleUrl: './scroll-up-button.component.scss'
})
export class ScrollUpButtonComponent {

  showScrollButton: boolean = false;
  fadeOutButton: boolean = false;

  constructor(private zone: NgZone) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const threshold = window.innerHeight;
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > threshold && !this.showScrollButton) {
      this.fadeOutButton = false;
      this.showScrollButton = true;
    } else if (currentScrollPosition <= threshold && this.showScrollButton) {
      this.fadeOutButton = true;
      setTimeout(() => {
        this.showScrollButton = false;
      }, 500);
    }
  }


  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
