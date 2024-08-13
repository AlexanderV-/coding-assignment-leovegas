import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../data/store";
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    moviesApi: import("@reduxjs/toolkit/query").CombinedState<{
        fetchDiscoverMovies: import("@reduxjs/toolkit/query").QueryDefinition<{
            page: number;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../data/apiSlice").MovieResponse, "moviesApi">;
        fetchMovies: import("@reduxjs/toolkit/query").QueryDefinition<{
            page: number;
            id: string;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../data/apiSlice").MovieResponse, "moviesApi">;
        fetchMovieTrailer: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../data/apiSlice").VideoDataResponse, "moviesApi">;
    }, never, "moviesApi">;
    starred: import("../data/starredSlice").StarredMovieState;
    watchLater: import("../data/watchLaterSlice").WatchLaterState;
    share: import("../data/shareSlice").ShareState;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export type AppDispatcherType = ReturnType<typeof useAppDispatch>;
