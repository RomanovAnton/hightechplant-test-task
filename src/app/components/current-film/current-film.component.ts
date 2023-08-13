import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-current-film',
  templateUrl: './current-film.component.html',
  styleUrls: ['./current-film.component.scss'],
})
export class CurrentFilmComponent {
  baseUrl = environment.apiBaseUrl;
  constructor(public films: FilmsService) {}
}
