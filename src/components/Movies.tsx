import Movie from "./Movie"; // Make sure the path to Movie component is correct
import "../styles/movies.scss";
import {
  useFetchDiscoverMoviesQuery,
  useFetchMoviesQuery,
} from "../data/apiSlice";
import { usePagination } from "../hooks/usePagingScroll";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectSearchQuery } from "../data/shareSlice";

const Movies = () => {
  const { page } = usePagination();
  const searchQuery = useAppSelector(selectSearchQuery);

  const { data, error, isLoading } = useFetchMoviesQuery(
    { page, id: searchQuery! },
    { skip: !searchQuery }
  );

  const {
    data: discoverData,
    error: discoverError,
    isLoading: discoverIsLoading,
  } = useFetchDiscoverMoviesQuery(
    { page },
    { skip: !!searchQuery && searchQuery.length > 0 }
  );

  const movies = searchQuery ? data?.results : discoverData?.results;

  if (isLoading || discoverIsLoading) return <h6>Loading...</h6>;
  if (error || discoverError) return <h6>Error</h6>;
  if (!movies || movies.length === 0) return <h6>No data</h6>;

  return (
    <div data-testid="movies" className="row">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
};

export default Movies;
