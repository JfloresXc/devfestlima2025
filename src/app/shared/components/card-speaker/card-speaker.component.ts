import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-speaker',
  template: `
    <article class="flex flex-col items-center justify-center mr-8 w-[300px] md:mr-0">
      <img class="w-full h-auto object-cover rounded-lg shadow-md"
           [src]="imageUrl()"
           [alt]="'Foto de ' + name() + ', ' + role()"
           loading="lazy">
      <div class="w-full text-center mt-4">
        <h3 class="text-2xl font-bold text-gray-900 mb-1">
          {{ name() }}
        </h3>
        <p class="text-black font-normal text-base">
          {{ role() }}
        </p>
      </div>
    </article>
  `,
  styleUrl: './card-speaker.component.css'
})
export class CardSpeakerComponent {
  imageUrl = input.required<string>();
  name = input.required<string>();
  role = input.required<string>();
}
