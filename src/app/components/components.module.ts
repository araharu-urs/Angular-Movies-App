import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingComponent } from './rating/rating.component';
import { FloorPipe } from '../pipes/floor/floor.pipe';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    RatingComponent,
    CastSlideshowComponent,
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    RatingComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }
