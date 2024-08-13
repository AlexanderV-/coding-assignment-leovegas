import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINT, ENDPOINT_SEARCH, ENDPOINT_DISCOVER } from "../constants";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzQ3ZWUwYWM4MzU3YTU0NmY0ZTg2NDcyNGI0NGQzNCIsIm5iZiI6MTcyMzMzOTMwNy45MDU1MzMsInN1YiI6IjY2YjgxMWE4N2RmMDM0YjljNDFhMTZlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hc4d07rSgmfEbyYOSQn4DDFvYEny_cZSC2zvBjVCnRE"; // Replace with your actual API key

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

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ENDPOINT}`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchDiscoverMovies: builder.query<MovieResponse, { page: number }>({
      query: (endpoint) => {
        const { page } = endpoint;
        return {
          url: `${ENDPOINT_DISCOVER}&page=${page}`,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, { arg: { page } }) => {
        if (newItems.results && page > 1) {
          return {
            ...newItems,
            results: [...currentCache.results, ...newItems.results],
          };
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 10,
    }),
    fetchMovies: builder.query<MovieResponse, { page: number; id: string }>({
      query: ({ page, id }) => {
        return {
          url: `${ENDPOINT_SEARCH}?${id}&page=${page}`,
        };
      },
      serializeQueryArgs: ({ queryArgs }) => {
        return queryArgs.id;
      },
      merge: (currentCache, newItems, { arg: { page } }) => {
        if (newItems.results && page > 1) {
          return {
            ...newItems,
            results: [...currentCache.results, ...newItems.results],
          };
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 10,
    }),
    fetchMovieTrailer: builder.query<VideoDataResponse, number>({
      query: (id: number) => {
        return {
          url: `${ENDPOINT}/movie/${id}/videos?language=en-US`,
        };
      },
    }),
  }),
});

export const {
  useFetchMoviesQuery,
  useFetchDiscoverMoviesQuery,
  useLazyFetchMovieTrailerQuery,
} = moviesApi;
