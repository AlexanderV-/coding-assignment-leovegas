export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
}
export interface MovieResponse {
    results: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}
interface VideoResult {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}
export interface VideoDataResponse {
    id: number;
    results: VideoResult[];
}
export declare const moviesApi: import("@reduxjs/toolkit/query/react").Api<import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, {
    fetchDiscoverMovies: import("@reduxjs/toolkit/query/react").QueryDefinition<{
        page: number;
    }, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, MovieResponse, "moviesApi">;
    fetchMovies: import("@reduxjs/toolkit/query/react").QueryDefinition<{
        page: number;
        id: string;
    }, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, MovieResponse, "moviesApi">;
    fetchMovieTrailer: import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, VideoDataResponse, "moviesApi">;
}, "moviesApi", never, typeof import("@reduxjs/toolkit/query/react").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useFetchMoviesQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<{
    page: number;
    id: string;
}, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, MovieResponse, "moviesApi">>, useFetchDiscoverMoviesQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<{
    page: number;
}, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, MovieResponse, "moviesApi">>, useLazyFetchMovieTrailerQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, VideoDataResponse, "moviesApi">>;
export {};
