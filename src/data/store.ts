import { configureStore } from "@reduxjs/toolkit";
import starredSlice from "./starredSlice";
import watchLaterSlice from "./watchLaterSlice";
import { moviesApi } from "./apiSlice";
import shareSlice from "./shareSlice";

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    starred: starredSlice,
    watchLater: watchLaterSlice,
    share: shareSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
