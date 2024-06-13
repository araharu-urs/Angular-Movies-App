import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/NowPlayingResponse';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  getNowPlayingData(): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=8a84232ac5d177416cd5fff71d2284e2&language=es-ES&page=1')
  }
}
