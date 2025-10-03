import { Component } from '@angular/core';
import { RegisterButton } from '@shared/components/register-button/register-button';

@Component({
  selector: 'app-navigation',
  imports: [RegisterButton],
  host: {
    '(window:scroll)': 'onWindowScroll()'
  },
  template: `
    <nav [class]="'border-b-2 fixed top-0 left-0 right-0 z-50 pt-2 transition-all duration-300 ' + (isScrolled ? 'nav-scrolled' : 'bg-white')"
         role="navigation"
         aria-label="Navegación principal">
      <div class="width-min-page">
        <div class="flex items-center justify-between h-20">

          <!-- Logo -->
          <div class="flex items-center">
            <a href="#" class="flex items-center group" aria-label="DevFest Lima 2025 - Ir al inicio">
              <img src="brands/DF25-Logo-Lockup-year.png"
                   alt="DevFest Lima 2025"
                   class="h-6 lg:h-7 transition-transform duration-200 group-hover:scale-105">
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <ul class="flex space-x-6" role="menubar">
              @for(item of navigationItems; track item.id) {
                <li role="none">
                  <a [href]="item.link"
                     [id]="item.id"
                     (click)="onMenuItemClick(item.link); $event.preventDefault()"
                     class="text-black hover:text-gray-900 transition-colors duration-200 font-medium text-base px-3 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                     role="menuitem"
                     [attr.aria-label]="'Ir a sección ' + item.label">
                    {{ item.label }}
                  </a>
                </li>
              }
            </ul>

            <app-register-button [label]="'Regístrate'"/>
          </div>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button (click)="toggleMenu()"
                    class="text-black hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2 hover:bg-gray-50 transition-colors duration-200"
                    [attr.aria-expanded]="isMenuOpen"
                    aria-controls="mobile-menu"
                    aria-label="Abrir menú de navegación">

              <div class="w-6 h-5 relative flex flex-col justify-between">
                <span class="block w-full h-0.5 bg-black transform transition-all duration-200"
                      [class.rotate-45]="isMenuOpen"
                      [class.translate-y-2]="isMenuOpen">
                </span>
                <span class="block w-full h-0.5 bg-black transform transition-all duration-200"
                      [class.opacity-0]="isMenuOpen"
                      [class.opacity-100]="!isMenuOpen">
                </span>
                <span class="block w-full h-0.5 bg-black transform transition-all duration-200"
                      [class.-rotate-45]="isMenuOpen"
                      [class.-translate-y-2]="isMenuOpen">
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu"
           class="lg:hidden fixed inset-0 top-16 bg-white z-40 transform transition-transform duration-300 shadow-lg"
           [class.translate-x-0]="isMenuOpen"
           [class.translate-x-full]="!isMenuOpen"
           [attr.aria-hidden]="!isMenuOpen">

        <div class="px-6 py-6 space-y-4">
          <ul class="space-y-2" role="menu">
            @for(item of navigationItems; track item.id) {
              <li role="none">
                <a [href]="item.link"
                   (click)="onMenuItemClick(item.link); $event.preventDefault()"
                   class="block text-black hover:text-gray-900 text-base font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                   role="menuitem"
                   [attr.aria-label]="'Ir a sección ' + item.label">
                  {{ item.label }}
                </a>
              </li>
            }
          </ul>

          <div class="pt-4 border-t border-gray-100">
            <app-register-button [label]="'Registrarse'" [fullWidth]="true" />
          </div>
        </div>
      </div>

      @if(isMenuOpen) {
        <div class="lg:hidden fixed inset-0 bg-black/20 z-30"
             (click)="closeMenu()"
             aria-hidden="true">
        </div>
      }
    </nav>
  `,
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isMenuOpen = false;
  isScrolled = false;

  navigationItems = [
    { label: 'Agenda', link: '#schedule', id: 'nav-schedule' },
    { label: 'Speakers', link: '#speakers', id: 'nav-speakers' },
    { label: 'Sponsors', link: '#sponsors', id: 'nav-sponsors' },
    { label: 'Ubicación', link: '#venue', id: 'nav-venue' }
  ];

  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  onMenuItemClick(link: string): void {
    this.closeMenu();

    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
