import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Film } from '../types/Film';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  films: Film[] = [];
  currentFilm: Film | null = null;
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  getFilms() {
    this.http
      .get<Film[]>(environment.apiBaseUrl)
      .subscribe((res) => (this.films = res));
  }
}
