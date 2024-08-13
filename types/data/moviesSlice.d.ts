export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
}
interface MovieResponse {
    results: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}
interface MoviesState {
    movies: IMovie[];
    fetchStatus: "idle" | "loading" | "success" | "error";
    page: number;
    totalPages: number;
    totalResults: number;
}
export declare const fetchMovies: import("@reduxjs/toolkit").AsyncThunk<MovieResponse, string, {
    rejectValue: string;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
declare const _default: import("redux").Reducer<MoviesState, import("redux").AnyAction>;
export default _default;
