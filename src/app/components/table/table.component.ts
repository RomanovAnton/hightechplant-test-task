import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/types/Film';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  constructor(public films: FilmsService) {}

  handleClick(item: Film) {
    this.films.currentFilm = item;
  }
}
