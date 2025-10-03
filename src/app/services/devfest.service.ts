import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { DevfestResponse } from '../models/devfestResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class DevfestService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getDevFests(): Observable<DevfestResponse> {
    return this.http.get<DevfestResponse>(`${this.apiUrl}/api/devfests`);
  }
}
