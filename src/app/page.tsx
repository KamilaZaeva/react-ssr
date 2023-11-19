import MovieListPage from "@/src/components/movie-list-page";

export default function Home({ searchParams }: { [key: string]: string | undefined }) {
  return (
      <MovieListPage searchParams={searchParams} />
  )
}
