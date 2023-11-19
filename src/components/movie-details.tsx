'use client'

import { apiRequest } from "@/src/api/api-requests";
import { MovieData } from "@/src/types";
import styles from '../styles/movie-details.module.css';

export async function MovieDetails(props: any): Promise<React.ReactElement>{
    const movie: MovieData | null = await apiRequest.findMovieById(props.movieId);

    if (!movie) return <h1>Incorrect movie ID: {props.movieId}</h1>

    return (
        <div className={styles.movieDetails__container}>
            <img className={styles.moviePoster} src={movie.imageUrl} alt={movie.name} />
            <div className={styles.movieDetails}>
                <div className={styles.movieDetails__firstLine}>
                    <div className={styles.movieName}>{movie.name}</div>
                    <div className={styles.movieRating}>{movie.rating}</div>
                </div>
                <div className={styles.movieDetails__secondLine}>
                    <div className={styles.movieYear}>{movie.releaseYear}</div>
                    <div className={styles.movieDuration}>{movie.duration}</div>
                </div>

                <div className={styles.movieDescription}>{movie.description}</div>
            </div>
        </div>
    )
}
