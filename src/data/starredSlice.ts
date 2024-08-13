import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IMovie } from "./apiSlice";

export interface StarredMovieState {
  starredMovies: IMovie[];
}

const initialState: StarredMovieState = {
  starredMovies: [],
};

const starredSlice = createSlice({
  name: "starred",
  initialState,
  reducers: {
    starMovie: (state, action: PayloadAction<IMovie>) => {
      const movieIndex = state.starredMovies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (movieIndex >= 0) {
        state.starredMovies.splice(movieIndex, 1);
      } else {
        state.starredMovies.push(action.payload);
      }
    },
    clearAllStarred: (state) => {
      state.starredMovies = [];
    },
  },
});

export const { starMovie, clearAllStarred } = starredSlice.actions;

export default starredSlice.reducer;

export const selectStarredMovies = (state: RootState) =>
  state.starred.starredMovies;

export const makeSelectStarredMovieById = () =>
  createSelector(
    [selectStarredMovies, (state: RootState, id: number) => id],
    (starredMovies, id) => starredMovies.find((movie) => movie.id === id)
  );
