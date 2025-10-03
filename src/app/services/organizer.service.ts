import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { OrganizerResponse } from '../models/organizer.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getOrganizers(): Observable<OrganizerResponse> {
    return this.http.get<OrganizerResponse>(`${this.apiUrl}/api/collaborators?where[devfest.year][equals]=${environment.DEVFEST_YEAR}`);
  }
}
