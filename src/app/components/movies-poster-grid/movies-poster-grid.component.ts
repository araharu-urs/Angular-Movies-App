import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/NowPlayingResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrl: './movies-poster-grid.component.css'
})
export class MoviesPosterGridComponent {
  @Input() movies: Movie[] = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  onMovieClick( movie: Movie ) {
    this.router.navigate(['/movie', movie.id ]);
    console.log(movie);

  }
}
