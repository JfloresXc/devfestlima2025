import { Component } from '@angular/core';
import { AboutSection } from "@app/components/home/about-section/about-section";
import { ScheduleSectionComponent } from "@app/components/home/schedule-section/schedule-section";
import { SponsorsSection } from "@app/components/home/sponsors-section/sponsors-section";
import { VenueSectionComponent } from "@app/components/home/venue-section/venue-section";
import { HeroSectionComponent } from "@app/components/home/hero-section/hero-section.component";
import { SpeakersSectionComponent } from "@app/components/home/speakers-section/speakers-section.component";
import { NavigationComponent } from "@app/shared/components/navigation/navigation.component";

@Component({
  selector: 'app-home',
  imports: [AboutSection, ScheduleSectionComponent, HeroSectionComponent, NavigationComponent],
  template: `
    <app-navigation></app-navigation>

    <main id="main-content" role="main">
      <app-hero-section></app-hero-section>
      
      <app-about-section></app-about-section>
      
      <app-schedule-section></app-schedule-section>
      
      <!-- @defer (on viewport){
        <app-speakers-section></app-speakers-section>
      } @placeholder{
        <p>Cargando...</p>
      }
      
      @defer (on viewport){
        <app-sponsors-section></app-sponsors-section>
      } @placeholder{
        <p>Cargando...</p>
      } -->
      <!-- <app-venue-section></app-venue-section> -->
    </main>

    <!-- <app-footer></app-footer> -->
  `,
  styleUrl: './home.css'
})
export class Home {

}
