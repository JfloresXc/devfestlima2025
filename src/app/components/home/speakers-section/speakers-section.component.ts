import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Speaker } from '@app/models/speaker.model';
import { SpeakerService } from '@app/services/speaker.service';

@Component({
  selector: 'app-speakers-section',
  template: `
    <section id="speakers" class="py-16 bg-gradient-to-br from-gray-50 to-blue-50" role="region"
  aria-label="Sección de speakers del evento">

  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Nuestros
          <span class="text-halftone-green">Speakers</span>
        </h2>
        <p class="text-lg text-black max-w-2xl mx-auto">
          Conoce a los expertos que compartirán sus conocimientos y experiencias
          en las últimas tecnologías de Google y desarrollo de software.
        </p>
      </div>

      <!-- Loading State -->
      @if(speakersResource.isLoading()) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for(item of [1,2,3,4,5,6]; track item) {
            <div class="animate-pulse">
              <div class="bg-gray-300 rounded-lg h-80"></div>
            </div>
          }
        </div>
      }

      <!-- Speakers Carousel -->
      @if(!speakersResource.isLoading() && speakers().length > 0) {
        <div class="relative carousel-container">
        <!-- Carousel Container -->
        <div class="overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for(speaker of visibleSpeakers(); track speaker.id) {
              <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                (click)="openSpeakerModal(speaker)">

                <div class="relative">
                  <!-- Speaker Image -->
                  <div class="relative h-64 overflow-hidden">
                    <img [src]="speaker.image.url" [alt]="'Foto de ' + speaker.fullName"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy" onerror="this.src='default-avatar.svg'">

                    <!-- Featured Badge -->
                    @if(speaker.firstName) {
                      <div class="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        ⭐ Featured
                      </div>
                    }
                  </div>

                  <!-- Speaker Info -->
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-halftone-green transition-colors duration-300">
                      {{ speaker.fullName }}
                    </h3>
                    <p class="text-green-600 font-medium mb-2">{{ speaker.description }}</p>
                    <p class="text-black text-sm mb-3">{{ speaker.bio }}</p>
                    <p class="text-gray-700 text-sm leading-relaxed mb-4">
                      {{ speaker.bio.length > 120 ? speaker.bio.substring(0, 120) + '...' : speaker.bio }}
                    </p>
                    <div class="flex items-center justify-between">
                      <span class="text-green-600 text-sm font-medium hover:text-green-700 transition-colors duration-300">
                        Ver más detalles →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Navigation Controls -->
        @if(totalSlides() > 1) {
          <div class="flex items-center justify-center mt-8 space-x-4">
            <!-- Previous Button -->
            <button (click)="prevSlide()" [disabled]="!canGoPrev()"
              class="carousel-nav-btn p-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Anterior">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <!-- Slide Indicators -->
            <div class="flex space-x-2">
              @for(slide of slideIndicators(); track $index) {
                <button (click)="goToSlide($index)"
                  [class]="'slide-indicator w-3 h-3 rounded-full transition-all duration-300 ' + (currentSlide() === $index ? 'active bg-gradient-to-r from-blue-500 to-green-500 scale-125' : 'bg-gray-300 hover:bg-gray-400')"
                  [attr.aria-label]="'Ir a slide ' + ($index + 1)">
                </button>
              }
            </div>

            <!-- Next Button -->
            <button (click)="nextSlide()" [disabled]="!canGoNext()"
              class="carousel-nav-btn p-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Siguiente">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        }
      </div>
      }

      <!-- Coming Soon Message -->
      @if(!speakersResource.isLoading() && speakers().length === 0) {
        <div class="text-center py-16">
          <div class="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 max-w-md mx-auto">
            <div class="text-6xl mb-4">🎤</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Speakers Coming Soon</h3>
            <p class="text-black mb-6">
              Estamos confirmando speakers increíbles para DevFest Lima 2025.
              ¡Mantente atento para conocer a los expertos que estarán con nosotros!
            </p>
            <div class="flex justify-center space-x-4">
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>
      }
    </div>
  </div>

  <!-- Speaker Detail Modal -->
  @if(selectedSpeaker()) {
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      (click)="closeSpeakerModal()">
      <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" (click)="$event.stopPropagation()">

        <!-- Modal Header -->
        <div class="relative">
          <img [src]="selectedSpeaker()?.image?.url" [alt]="'Foto de ' + selectedSpeaker()?.fullName" class="w-full h-64 object-cover"
            onerror="this.src='default-avatar.svg'">

          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <button (click)="closeSpeakerModal()"
            class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            aria-label="Cerrar modal">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-3xl font-bold mb-2">{{ selectedSpeaker()?.fullName }}</h3>
            <p class="text-xl opacity-90">{{ selectedSpeaker()?.description }}</p>
            <p class="text-lg opacity-75">{{ selectedSpeaker()?.bio }}</p>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <div class="mb-6">
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Biografía</h4>
            <p class="text-gray-700 leading-relaxed">{{ selectedSpeaker()!.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  }
</section>
  `,
  styleUrl: './speakers-section.css'
})
export class SpeakersSectionComponent {
  private speakerService = inject(SpeakerService);

  speakersResource = rxResource({
    stream: () => this.speakerService.getSpeakers({
      limit: 10
    })
  });

  speakers = computed(() => this.speakersResource.value()?.docs ?? []);
  selectedSpeaker = signal<Speaker | null>(null);
  currentSlide = signal(0);
  itemsPerSlide = 3;

  totalSlides = computed(() => Math.ceil(this.speakers().length / this.itemsPerSlide));

  visibleSpeakers = computed(() => {
    const startIndex = this.currentSlide() * this.itemsPerSlide;
    return this.speakers().slice(startIndex, startIndex + this.itemsPerSlide);
  });

  slideIndicators = computed(() => Array(this.totalSlides()).fill(0));

  canGoPrev = computed(() => this.totalSlides() > 1);
  canGoNext = computed(() => this.totalSlides() > 1);

  nextSlide(): void {
    if (this.currentSlide() < this.totalSlides() - 1) {
      this.currentSlide.update(v => v + 1);
    } else {
      this.currentSlide.set(0);
    }
  }

  prevSlide(): void {
    if (this.currentSlide() > 0) {
      this.currentSlide.update(v => v - 1);
    } else {
      this.currentSlide.set(this.totalSlides() - 1);
    }
  }

  goToSlide(slideIndex: number): void {
    this.currentSlide.set(slideIndex);
  }

  openSpeakerModal(speaker: Speaker): void {
    this.selectedSpeaker.set(speaker);
    document.body.style.overflow = 'hidden';
  }

  closeSpeakerModal(): void {
    this.selectedSpeaker.set(null);
    document.body.style.overflow = 'auto';
  }

  getSocialIcon(platform: string): string {
    const icons: { [key: string]: string } = {
      twitter: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
      linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z',
      github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
      website: 'M10 2L3 9l7 7 7-7-7-7zM10 4l5 5-5 5-5-5 5-5z'
    };
    return icons[platform] || icons['website'];
  }
}