import MovieListPage from "@/src/components/movie-list-page"

export default function MovieInfo(
    { params: { movieId }, searchParams }: { params: { movieId: string }, searchParams: { [key: string]: string | undefined } }
) {
    return (
        <MovieListPage movieId={movieId} searchParams={searchParams} />
    )
}