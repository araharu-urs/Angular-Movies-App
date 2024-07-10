import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { Movie, NowPlayingResponse } from '../interfaces/NowPlayingResponse';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: String = 'https://api.themoviedb.org/3';
  private moviesPage = 1;

  public loading = false;

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
}
