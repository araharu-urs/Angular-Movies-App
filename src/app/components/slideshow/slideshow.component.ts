import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/NowPlayingResponse';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent {
  @Input() movies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('slide shoiw coponent');
    console.log(this.movies);
  }
}
