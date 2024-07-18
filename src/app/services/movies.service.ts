import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Movie, NowPlayingResponse } from '../interfaces/NowPlayingResponse';
import { Cast, CreditsResponse } from '../interfaces/credits-response';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public loading = false;
  private moviesPage = 1;
  private baseUrl: String = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient) { }

  get params() {
    return {
      api_key: '8a84232ac5d177416cd5fff71d2284e2',
      language: 'es-ES',
      page: this.moviesPage.toString()
    }
  }

  getNowPlayingData(): Observable<Movie[]> {

    console.log('Lamada al api');
    if ( this.loading ) {
      return of([]);
    }

    this.loading = true;
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/movie/now_playing?`,{
      params: this.params
    }).pipe(
      map((resp) => resp.results ),
      tap( () => {
        this.moviesPage += 1;
        this.loading = false;
      })
    );
  }

  getDetailMovie( id: string ) {

    return this.http.get<MovieResponse>(`${ this.baseUrl }/movie/${ id }`, {
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    )

  }

  getCast( id: string ):Observable<Cast[]> {

    return this.http.get<CreditsResponse>(`${ this.baseUrl }/movie/${ id }/credits`, {
      params: this.params
    }).pipe(
      map( resp => resp.cast ),
      catchError( err => of([]) ),
    );
  }

  searchMovie( stValue: string ): Observable<Movie[]> {

    const params = {...this.params, page: '1', query: stValue };

    return this.http.get<NowPlayingResponse>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    )
  }

  resetCarteleraPage() {
    this.moviesPage = 1;
  }
}
