import { Component, input } from '@angular/core';

@Component({
  selector: 'app-register-button',
  imports: [],
  template: `
    <button class="bg-core-blue text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            [class]="fullWidth() ? 'w-full py-3' : ''"
            type="button"
            aria-label="Registrarse al evento DevFest Lima 2025">
      {{label()}}
    </button>
  `,
  styleUrl: './register-button.css'
})
export class RegisterButton {
  fullWidth = input<boolean>(false);
  label = input<string>('');
}
