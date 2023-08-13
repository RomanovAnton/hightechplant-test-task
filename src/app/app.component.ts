import { Component } from '@angular/core';
import { FilmsService } from './services/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hightechplant-test-task';

  constructor(public films: FilmsService) {}

  ngOnInit() {
    this.films.getFilms();
  }
}
