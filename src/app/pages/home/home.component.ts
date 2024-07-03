import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/NowPlayingResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public movies: Movie[] = []

  constructor( private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getNowPlayingData()
    .subscribe( result => {
      this.movies = result.results;
    })
  }
}
