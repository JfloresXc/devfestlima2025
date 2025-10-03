import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  template: `
    <section id="about" class="width-min-page mb-16 md:mb-40 lg:mb-80">
      <div class="border-2 border-black p-12 py-16 lg:p-24 rounded-2xl bg-core-blue text-white">
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-8 md:mb-12 lg:mb-16">
            Acerca de <span class="text-white">DevFest Lima</span>
          </h2>

          <div class="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
            <div class="text-left">
              <p class="text-base md:text-lg mb-6 leading-relaxed">
                DevFest Lima es el evento tecnológico más grande de la comunidad Google Developer Groups en Perú.
                Una conferencia de un día completo donde desarrolladores, diseñadores y emprendedores se reúnen
                para aprender sobre las últimas tecnologías de Google.
              </p>

              <div class="space-y-3 md:space-y-4 mb-8">
                <div class="flex items-center">
                  <div class="w-2.5 h-2.5 md:w-3 md:h-3 bg-core-yellow rounded-full mr-3 flex-shrink-0"></div>
                  <span class="text-sm md:text-base">Charlas técnicas de expertos internacionales</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2.5 h-2.5 md:w-3 md:h-3 bg-core-yellow rounded-full mr-3 flex-shrink-0"></div>
                  <span class="text-sm md:text-base">Workshops prácticos y hands-on</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2.5 h-2.5 md:w-3 md:h-3 bg-core-yellow rounded-full mr-3 flex-shrink-0"></div>
                  <span class="text-sm md:text-base">Networking con la comunidad tech</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2.5 h-2.5 md:w-3 md:h-3 bg-core-yellow rounded-full mr-3 flex-shrink-0"></div>
                  <span class="text-sm md:text-base">Demos de productos y tecnologías emergentes</span>
                </div>
              </div>
            </div>

            <div>
              <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-black relative overflow-visible stats-card">
                <div class="grid grid-cols-2 gap-4 md:gap-6 text-center">
                  <div>
                    <div class="text-2xl md:text-3xl font-bold text-core-blue mb-1 md:mb-2">500+</div>
                    <div class="text-black text-sm md:text-base">Asistentes</div>
                  </div>
                  <div>
                    <div class="text-2xl md:text-3xl font-bold text-core-green mb-1 md:mb-2">20+</div>
                    <div class="text-black text-sm md:text-base">Speakers</div>
                  </div>
                  <div>
                    <div class="text-2xl md:text-3xl font-bold text-core-yellow mb-1 md:mb-2">8</div>
                    <div class="text-black text-sm md:text-base">Horas</div>
                  </div>
                  <div>
                    <div class="text-2xl md:text-3xl font-bold text-core-red mb-1 md:mb-2">15+</div>
                    <div class="text-black text-sm md:text-base">Sponsors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about-section.css'
})
export class AboutSection {

}
