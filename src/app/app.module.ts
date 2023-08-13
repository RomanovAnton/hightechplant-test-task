import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AngularSplitModule } from 'angular-split';
import { TableComponent } from './components/table/table.component';
import { CurrentFilmComponent } from './components/current-film/current-film.component';

@NgModule({
  declarations: [AppComponent, TableComponent, CurrentFilmComponent],
  imports: [BrowserModule, AngularSplitModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
