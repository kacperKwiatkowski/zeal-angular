import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import { Movie, MovieImages, MovieVideo } from "../../models/movie";
import { IMAGES_SIZES } from "../../constants/images-sizes";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {

    movie: Movie | null = null;
    movieVideos: MovieVideo[] = []
    movieImages: MovieImages | null = null;
    imagesSizes = IMAGES_SIZES;

    constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(({ id }) => {
            this.getMovie(id);
            this.getMovieVideo(id);
            this.getMovieImages(id);
        });
    }

    getMovie(id: string) {
        this.moviesService.getMovie(id).subscribe(movieData => {
            this.movie = movieData;
        })
    }

    getMovieVideo(id: string){
        this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
            this.movieVideos = movieVideoData;
        })
    }

    getMovieImages(id: string){
        this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
            console.log(movieImagesData.backdrops)
            this.movieImages = movieImagesData;
        })
    }
}
