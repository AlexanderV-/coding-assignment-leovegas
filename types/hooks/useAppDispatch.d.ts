import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../data/store";
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    movies: import("../data/moviesSlice").MoviesState;
    starred: {
        starredMovies: never[];
    };
    watchLater: {
        watchLaterMovies: never[];
    };
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export type AppDispatcherType = ReturnType<typeof useAppDispatch>;
