declare const useMovies: () => {
    movies: never[];
    searchMovies: (query: string) => void;
};
export default useMovies;
