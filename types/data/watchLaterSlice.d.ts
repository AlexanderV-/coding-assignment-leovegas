import { IMovie } from "./apiSlice";
import { RootState } from "./store";
export interface WatchLaterState {
    watchLaterMovies: IMovie[];
}
export declare const watchLater: import("@reduxjs/toolkit").ActionCreatorWithPayload<IMovie, "watchLater/watchLater">, removeAllWatchLater: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"watchLater/removeAllWatchLater">;
declare const _default: import("redux").Reducer<WatchLaterState, import("redux").AnyAction>;
export default _default;
export declare const selectWatchLaterMovies: (state: RootState) => IMovie[];
export declare const makeSelectWatchLaterMovieById: () => ((state: {
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
    starred: import("./starredSlice").StarredMovieState;
    watchLater: WatchLaterState;
    share: import("./shareSlice").ShareState;
}, id: number) => IMovie | undefined) & import("reselect").OutputSelectorFields<(args_0: IMovie[], args_1: number) => IMovie | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
