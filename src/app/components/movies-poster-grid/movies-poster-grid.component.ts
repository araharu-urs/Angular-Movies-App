import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/NowPlayingResponse';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrl: './movies-poster-grid.component.css'
})
export class MoviesPosterGridComponent {
  @Input() movies: Movie[] = [];
}
