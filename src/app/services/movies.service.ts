import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getMovies() {
        console.log('GET MOVIES METHOD INVOKED');

        return this.http.get(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=736382ba1ec5d4e25e6504867559f150'
        );
    }
}
