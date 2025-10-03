import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-section',
  imports: [],
  template: `
  <section id="schedule" class="py-16 bg-white mt-40">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Agenda del <span class="text-core-blue">Evento</span>
        </h2>
        <p class="text-lg text-black max-w-2xl mx-auto">
          Un día completo de charlas técnicas, workshops y networking con la comunidad tech de Lima
        </p>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-500 hidden md:block"></div>
        
        <!-- Schedule items -->
        <div class="space-y-8">
          <!-- Registration -->
          <div class="relative flex items-center">
            <div class="hidden md:flex absolute left-6 w-4 h-4 bg-core-blue rounded-full border-4 border-white shadow-lg z-10"></div>
            <div class="md:ml-16 bg-halftone-yellow rounded-xl p-6 w-full border-2">
              <div class="flex flex-col md:flex-row md:items-center justify-between ">
                <div>
                  <div class="text-white font-semibold text-sm mb-1 birder">8:00 - 9:00 AM</div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Registro y Networking</h3>
                  <p class="text-black">Bienvenida, registro de asistentes y desayuno de networking</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <span class="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Networking</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Opening Keynote -->
          <div class="relative flex items-center">
            <div class="hidden md:flex absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10 "></div>
            <div class="md:ml-16 bg-core-green rounded-xl p-6 w-full border-2">
              <div class="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div class="text-white font-semibold text-sm mb-1">9:00 - 9:45 AM</div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Keynote de Apertura</h3>
                  <p class="text-black">El futuro del desarrollo con tecnologías Google</p>
                  <div class="flex items-center mt-2">
                    <div class="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <span class="text-sm text-gray-200">Speaker Principal - Por confirmar</span>
                  </div>
                </div>
                <div class="mt-4 md:mt-0">
                  <span class="inline-block bg-core-red text-white px-3 py-1 rounded-full text-sm">Keynote</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Talks Block 1 -->
          <div class="relative flex items-center">
            <div class="hidden md:flex absolute left-6 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div class="md:ml-16 bg-core-blue rounded-xl p-6 w-full border-2">
              <div class="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div class="text-white font-semibold text-sm mb-1">10:00 - 11:30 AM</div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Bloque de Charlas Técnicas I</h3>
                  <p class="text-black">Angular, Flutter y Firebase - Las últimas novedades</p>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div class="bg-white rounded-lg p-3">
                      <div class="text-sm font-semibold text-gray-900">Angular 20</div>
                      <div class="text-xs text-black">Sala A</div>
                    </div>
                    <div class="bg-white rounded-lg p-3">
                      <div class="text-sm font-semibold text-gray-900">Flutter 3.0</div>
                      <div class="text-xs text-black">Sala B</div>
                    </div>
                    <div class="bg-white rounded-lg p-3">
                      <div class="text-sm font-semibold text-gray-900">Firebase</div>
                      <div class="text-xs text-black">Sala C</div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 md:mt-0">
                  <span class="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Tech Talks</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Coffee Break -->
          <div class="relative flex items-center">
            <div class="hidden md:flex absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div class="md:ml-16 bg-core-red rounded-xl p-6 w-full border-2">
              <div class="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div class="text-white font-semibold text-sm mb-1">11:30 - 12:00 PM</div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Coffee Break</h3>
                  <p class="text-gray-200">Pausa para café y networking</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <span class="inline-block bg-core-green text-white px-3 py-1 rounded-full text-sm">Break</span>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styleUrl: './schedule-section.css'
})
export class ScheduleSectionComponent {

}
