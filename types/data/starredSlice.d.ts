import { RootState } from "./store";
import { IMovie } from "./apiSlice";
export interface StarredMovieState {
    starredMovies: IMovie[];
}
export declare const starMovie: import("@reduxjs/toolkit").ActionCreatorWithPayload<IMovie, "starred/starMovie">, clearAllStarred: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"starred/clearAllStarred">;
declare const _default: import("redux").Reducer<StarredMovieState, import("redux").AnyAction>;
export default _default;
export declare const selectStarredMovies: (state: RootState) => IMovie[];
export declare const makeSelectStarredMovieById: () => ((state: {
    moviesApi: import("@reduxjs/toolkit/query").CombinedState<{
        fetchDiscoverMovies: import("@reduxjs/toolkit/query").QueryDefinition<{
            page: number;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("./apiSlice").MovieResponse, "moviesApi">;
        fetchMovies: import("@reduxjs/toolkit/query").QueryDefinition<{
            page: number;
            id: string;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("./apiSlice").MovieResponse, "moviesApi">;
        fetchMovieTrailer: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("./apiSlice").VideoDataResponse, "moviesApi">;
    }, never, "moviesApi">;
    starred: StarredMovieState;
    watchLater: import("./watchLaterSlice").WatchLaterState;
    share: import("./shareSlice").ShareState;
}, id: number) => IMovie | undefined) & import("reselect").OutputSelectorFields<(args_0: IMovie[], args_1: number) => IMovie | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
