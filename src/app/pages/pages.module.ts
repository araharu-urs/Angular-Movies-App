import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/HomeComponent';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingComponent } from '../components/rating/rating.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
  ]
})
export class PagesModule { }
