import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { SponsorService } from '@services/sponsor.service';

@Component({
  selector: 'app-sponsors-section',
  imports: [CommonModule],
  template: `
  <section class="sponsors">
      <div class="container">
          <h2 class="sponsors__title">Sponsors</h2>
          <div class="sponsors__content">
              @for (item of sponsorsResource.value()?.docs; track item.name) {
                  <a class="sponsors__item" [href]="item.url" target="_blank">
                      <img [src]="item.imageLogo" [alt]="item.name">
                  </a>
              }
          </div>
      </div>
  </section>
  `,
  styleUrl: './sponsors-section.css'
})
export class SponsorsSection {
  sponsorService = inject(SponsorService);

  sponsorsResource = rxResource({
    stream: () => this.sponsorService.getSponsors()
  });
}
