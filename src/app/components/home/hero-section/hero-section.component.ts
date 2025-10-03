import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatTime, formatDate } from '@app/utils/functions';
import { RegisterButton } from "@app/shared/components/register-button/register-button";

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, RegisterButton],
  template: `
  <section id="hero"
  class="relative min-h-screen flex items-center justify-center overflow-hidden py-24 pt-32"
  role="banner" aria-label="Sección principal del evento DevFest Lima 2025">

  <div class="absolute inset-0">
    <div
      class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse">
    </div>
    <div
      class="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse">
    </div>

    <div class="absolute top-32 left-16 animate-float-slow opacity-20">
      <svg class="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.5 12L5.5 9L8.5 6L7 4.5L2.5 9L7 13.5L8.5 12ZM15.5 12L18.5 9L15.5 6L17 4.5L21.5 9L17 13.5L15.5 12Z"/>
      </svg>
    </div>

    <div class="absolute top-64 right-32 animate-float-medium opacity-15">
      <svg class="w-12 h-12 text-halftone-green" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 19H7V5H17M17 1H7C5.89 1 5 1.89 5 3V21C5 22.1 5.89 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.89 18.1 1 17 1Z"/>
      </svg>
    </div>

    <div class="absolute bottom-32 right-16 animate-float-fast opacity-20">
      <svg class="w-20 h-20 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6H20V16H4M20 18C20.6 18 21 17.6 21 17V5C21 4.4 20.6 4 20 4H4C3.4 4 3 4.4 3 5V17C3 17.6 3.4 18 4 18H1V20H23V18H20Z"/>
      </svg>
    </div>

    <div class="absolute top-48 left-32 animate-float-slow opacity-15">
      <svg class="w-14 h-14 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"/>
      </svg>
    </div>

    <div class="absolute bottom-48 left-24 animate-spin-slow opacity-10">
      <svg class="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
      </svg>
    </div>

    <div class="absolute top-80 right-48 animate-bounce-slow opacity-15">
      <svg class="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.6,9.48L16.85,8.82C17.3,8.2 17.58,7.43 17.58,6.6C17.58,4.61 15.97,3 14,3C12.03,3 10.42,4.61 10.42,6.6C10.42,7.43 10.7,8.2 11.15,8.82L10.4,9.48C8.93,8.25 8,6.45 8,4.5C8,2.01 10.01,0 12.5,0S17,2.01 17,4.5C17,6.45 16.07,8.25 14.6,9.48H17.6M6,10V18H18V10M8,13A1,1 0 0,1 9,14A1,1 0 0,1 8,15A1,1 0 0,1 7,14A1,1 0 0,1 8,13M16,13A1,1 0 0,1 17,14A1,1 0 0,1 16,15A1,1 0 0,1 15,14A1,1 0 0,1 16,13Z"/>
      </svg>
    </div>

    <div class="absolute bottom-64 right-64 animate-float-medium opacity-10">
      <svg class="w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
      </svg>
    </div>

    <div class="absolute top-96 left-64 animate-float-fast opacity-15">
      <svg class="w-14 h-14 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
      </svg>
    </div>

    <div class="absolute bottom-80 left-48 animate-pulse opacity-20">
      <svg class="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11,4H13L14,9H18L10,20L11,13H7L11,4Z"/>
      </svg>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
    <div class="text-center max-w-4xl mx-auto">
        <div class="mb-12">
          <h1 class="text-6xl md:text-8xl lg:text-[10rem] font-bold mb-6 leading-tight">
            <span class="block  mb-2">
              DevFest
            </span>
            <span class="block text-4xl md:text-6xl lg:text-8xl">
              <span class="text-core-blue text-stroke">Lima {{" "}}</span>
              <span class="">2025</span>
            </span>
          </h1>

          <p class="text-xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {{ eventData.description }}
          </p>
        </div>

        <div class="bg-white rounded-2xl border-black p-8 mb-12 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="font-semibold text-gray-900">{{ formatDate(eventData.date) }}</div>
              <div class="text-sm text-black">Fecha del evento</div>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-halftone-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="font-semibold text-gray-900">{{ formatTime(eventData.startTime) }} - {{
                formatTime(eventData.endTime) }}</div>
              <div class="text-sm text-black">Horario</div>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="font-semibold text-gray-900">{{ eventData.location.name }}</div>
              <div class="text-sm text-black">Ubicación</div>
            </div>
          </div>
        </div>



        <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 mb-16">
          <app-register-button [label]="'Regístrate gratis'"></app-register-button>
        </div>
      </div>
    </div>
</section>
  `,
  styleUrl: './hero-section.css'
})
export class HeroSectionComponent {
  eventData = {
    id: 'devfest-lima-2025',
    title: 'DevFest Lima 2025',
    description: 'El evento de desarrolladores más grande de Lima. Únete a nosotros para un día lleno de charlas técnicas, networking y aprendizaje sobre las últimas tecnologías de Google.',
    date: '2025-11-30',
    startTime: '08:00',
    endTime: '18:00',
    location: {
      name: 'Universidad UPC Villa',
      address: 'Av Alameda San Marcos 11, Chorrillos 15067',
      city: 'Lima',
      country: 'Perú',
      coordinates: {
        lat: -12.0464,
        lng: -77.0428
      },
      venue: {
        capacity: 500,
        facilities: ['WiFi gratuito', 'Estacionamiento', 'Cafetería', 'Salas de networking'],
        accessibility: ['Acceso para sillas de ruedas', 'Intérpretes de señas', 'Audio loop']
      }
    },
    capacity: 500,
    registeredCount: 0,
    status: 'upcoming',
    tags: ['Google', 'Desarrollo', 'Tecnología', 'Networking', 'Lima'],
    organizers: [],
    sponsors: [],
    socialMedia: {
      twitter: '@DevFestLima',
      facebook: 'DevFestLima',
      instagram: '@devfestlima',
      linkedin: 'devfest-lima',
      hashtag: '#DevFestLima2025'
    },
    registration: {
      isOpen: true,
      url: 'https://devfest-lima-2025.eventbrite.com',
      price: 0,
      currency: 'PEN',
      regularDeadline: '2025-11-10',
      requirements: ['Laptop personal', 'Ganas de aprender']
    }
  };

  formatTime = formatTime;
  formatDate = formatDate;
}