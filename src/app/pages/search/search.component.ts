import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/NowPlayingResponse';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  public strValue: string = '';
  public movies: Movie[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                private movieService: MoviesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.strValue = params['value'];
      console.log('recovery: ',this.strValue )

      this.movieService.searchMovie( this.strValue ).subscribe( movies => {
        this.movies = movies;
      })
    })

  }
}
