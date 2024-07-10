import { Component, HostListener } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/NowPlayingResponse';
import { max } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {

    const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1100;
    const positionMax = (document.documentElement.scrollHeight || document.body.scrollHeight);

    // console.log({position, positionMax});
    if (position > positionMax) {
      if ( this.movieService.loading ) { return; }
      // this.movieService.getNowPlayingData(); // por que no se ejecuta chicos
      this.movieService.getNowPlayingData().subscribe( result => {
        this.movies.push(...result);
      });
    }
  }

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getNowPlayingData()
      .subscribe(result => {
        this.movies = result;
        this.moviesSlideShow = result;
      });
  }
}
