import { Injectable, signal, Signal } from '@angular/core';
import { DevFest } from '../models/devfest.model';
import { DevfestResponseItem } from '../models/devfestResponse.interface';


@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _devFest = signal<DevFest>({
    id: '',
    year: '',
    location: '',
    date: '',
    startHour: '',
    description: '',
    urlRegister: '',
    urlMaps: '',
    imageLogo: '',
    imageHome: '',
  });

  readonly devFest = this._devFest as Signal<DevFest>;

  setDevFest(newDevFest: DevfestResponseItem) {
    this._devFest.set(new DevFest(newDevFest));
  }
}
