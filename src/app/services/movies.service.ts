import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDto, MovieImages, MovieVideoDto } from "../models/movie";
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = '736382ba1ec5d4e25e6504867559f150';

    constructor(private http: HttpClient) {}

    getMovies(type: string = 'upcoming', count: number = 12) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, count));
                })
            );
    }

    getMovie(id: string) {
        return this.http
            .get<Movie>(
                `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
            );
    }

    getMovieVideos(id: string) {
        return this.http
            .get<MovieVideoDto>(
                `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
            ).pipe(
                switchMap((res) => {
                    return of(res.results);
                }))
            ;
    }

    getMovieImages(id: string) {
        return this.http
            .get<MovieImages>(
                `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
            );
    }
}
