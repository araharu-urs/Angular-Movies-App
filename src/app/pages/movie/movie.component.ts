import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { combineLatest } from 'rxjs';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { MovieResponse } from '../../interfaces/movie-response';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  public movie: MovieResponse = {} as MovieResponse;
  public cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private movieService: MoviesService,
               private location: Location,
               private router: Router ) {}

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    // this.movieService.getDetailMovie( id ).subscribe( movie => {
    //   if ( !movie ) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.movie = movie;
    // });

    // this.movieService.getCast( id ).subscribe( cast => {
    //   console.log(cast)
    //   this.cast = cast.filter( actor => actor.profile_path !== null );
    // });

    combineLatest([
      this.movieService.getDetailMovie( id ),
      this.movieService.getCast( id )
    ]).subscribe( ( [movie, cast] ) => {

      if ( !movie ) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.movie = movie;
      this.cast = cast.filter( actor => actor.profile_path !== null );
    });
  }

  onBack() {
    this.location.back();
  }
}
