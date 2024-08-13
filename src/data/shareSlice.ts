import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { moviesApi } from "./apiSlice";

interface IYTModal {
  movieId?: number;
}

export interface ShareState {
  movieId?: number;
  isOpen: boolean;
  searchQuery?: string;
  page: number;
}

const initialState: ShareState = {
  movieId: undefined,
  isOpen: false,
  searchQuery: "",
  page: 1,
};

const shareSlice = createSlice({
  name: "share",
  initialState,
  reducers: {
    defaultPage: (state) => {
      state.page = 1;
    },
    nextPage: (state) => {
      state.page++;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.page = 1;
    },
    setYTModal: (state, action: PayloadAction<IYTModal>) => {
      state.movieId = action.payload.movieId;
      state.isOpen = true;
    },
    closeYTModal: (state) => {
      state.movieId = undefined;
      state.isOpen = false;
    },
  },
});

export const {
  setYTModal,
  closeYTModal,
  setSearchQuery,
  nextPage,
  defaultPage,
} = shareSlice.actions;

export default shareSlice.reducer;

export const selectIsVisible = (state: RootState) => state.share.isOpen;
export const selectMovieId = (state: RootState) => state.share.movieId;
export const selectSearchQuery = (state: RootState) => state.share.searchQuery;
export const selectPage = (state: RootState) => state.share.page;
