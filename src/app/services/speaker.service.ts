import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SpeakerResponse } from '@app/models/speaker.model';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getSpeakers({ limit } = { limit: 0 }): Observable<SpeakerResponse> {
    return this.http.get<SpeakerResponse>(
      `${this.apiUrl}/api/speakers?where[devfest.year][equals]=${environment.DEVFEST_YEAR}&limit=${limit}`
    );
  }
}
