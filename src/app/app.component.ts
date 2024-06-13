import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MoviesApp';

  constructor( private movieService: MoviesService) {
    this.movieService.getNowPlayingData()
    .subscribe( result => {

      console.log(result);
    })
  }
}
