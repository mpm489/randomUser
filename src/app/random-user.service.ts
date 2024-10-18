import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RandomUserResponse, User } from './random-user.interface'; // Interface importieren

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  // API aufrufen und Daten mappen
  getRandomUser(): Observable<User> {
    return this.http.get<RandomUserResponse>(this.apiUrl).pipe(
      map((response: RandomUserResponse) => response.results[0]) // Nur den ersten Nutzer zurückgeben
    );
  }
}
