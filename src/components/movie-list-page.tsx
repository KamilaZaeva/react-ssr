import {apiRequest} from "@/src/api/api-requests";
import {MovieData} from "@/src/types";
import HeaderSearch from "./header-search";
import MoviesList from "./movies-list";
import {MovieDetails} from "./movie-details";

export default async function MovieListPage(
    props: any
) {
    const genres = ['documentary', 'comedy', 'horror', 'crime'];
    const movies: MovieData[] | null = await apiRequest.findMoviesByQuery({
        sortBy: props.searchParams['sortBy'] || '',
        sortOrder: 'asc',
        search: props.searchParams['query'] || '',
        searchBy: 'title',
        filter: props.searchParams['genre'] || '',
    });

    return <>
        <div className="App">
            <div className='App__container'>
                <>
                    {
                        props.movieId ?
                            <MovieDetails
                                searchParams={props.searchParams}
                                movieId={props.movieId}
                            /> :
                            <HeaderSearch
                                searchText={props.searchParams['query'] || ''}
                            />
                    }
                </>

                <main className='moviesListPage'>
                    <div className="moviesList">
                        <MoviesList
                            searchParams={props.searchParams}
                            movies={movies}
                            genres={genres}
                            activeGenres={props.searchParams['genre']?.split(',') || []}
                            sortBy={props.searchParams['sortBy'] || ''}
                        />
                    </div>
                </main>
            </div>
        </div>
    </>
}