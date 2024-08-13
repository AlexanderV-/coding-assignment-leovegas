declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
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
    watchLater: import("./watchLaterSlice").WatchLaterState;
    share: import("./shareSlice").ShareState;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<{
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
    watchLater: import("./watchLaterSlice").WatchLaterState;
    share: import("./shareSlice").ShareState;
}, import("redux").AnyAction, undefined>, import("redux").Middleware<{}, import("@reduxjs/toolkit/query").RootState<{
    fetchDiscoverMovies: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("./apiSlice").MovieResponse, "moviesApi">;
    fetchMovies: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
        id: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("./apiSlice").MovieResponse, "moviesApi">;
    fetchMovieTrailer: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("./apiSlice").VideoDataResponse, "moviesApi">;
}, string, "moviesApi">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>]>>;
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
