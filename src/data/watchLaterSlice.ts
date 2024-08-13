import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "./apiSlice";
import { RootState } from "./store";

export interface WatchLaterState {
  watchLaterMovies: IMovie[];
}

const initialState: WatchLaterState = {
  watchLaterMovies: [],
};

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  reducers: {
    watchLater: (state, action: PayloadAction<IMovie>) => {
      if (
        state.watchLaterMovies.find((movie) => movie.id === action.payload.id)
      ) {
        state.watchLaterMovies = state.watchLaterMovies.filter(
          (movie) => movie.id !== action.payload.id
        );
      } else {
        state.watchLaterMovies.unshift(action.payload);
      }
    },

    removeAllWatchLater: (state) => {
      state.watchLaterMovies = [];
    },
  },
});

export const { watchLater, removeAllWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;

export const selectWatchLaterMovies = (state: RootState) =>
  state.watchLater.watchLaterMovies;

export const makeSelectWatchLaterMovieById = () =>
  createSelector(
    [selectWatchLaterMovies, (state: RootState, id: number) => id],
    (watchLaterMoviews, id) =>
      watchLaterMoviews.find((movie) => movie.id === id)
  );
