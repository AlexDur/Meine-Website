import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services-optimierung-hosting',
  standalone: true,
  imports: [],
  templateUrl: './services-optimierung-hosting.component.html',
  styleUrl: './services-optimierung-hosting.component.scss'
})
export class ServicesOptimierungHostingComponent implements OnInit{


  ngOnInit() {
    // Andere Initialisierungen...
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('seo-hosting-animate');
        }
      });
    }, {
      threshold: 0.5 // Auslösen, wenn 50% des Elements sichtbar sind
    });

    const seoHostingRightBox = document.querySelector('.seo-hosting-box-rechts');
    if (seoHostingRightBox) {
      observer.observe(seoHostingRightBox as HTMLElement);
    }
  }
}
