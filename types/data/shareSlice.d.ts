import { RootState } from "./store";
interface IYTModal {
    movieId?: number;
}
export interface ShareState {
    movieId?: number;
    isOpen: boolean;
    searchQuery?: string;
    page: number;
}
export declare const setYTModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<IYTModal, "share/setYTModal">, closeYTModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"share/closeYTModal">, setSearchQuery: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "share/setSearchQuery">, nextPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"share/nextPage">, defaultPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"share/defaultPage">;
declare const _default: import("redux").Reducer<ShareState, import("redux").AnyAction>;
export default _default;
export declare const selectIsVisible: (state: RootState) => boolean;
export declare const selectMovieId: (state: RootState) => number | undefined;
export declare const selectSearchQuery: (state: RootState) => string | undefined;
export declare const selectPage: (state: RootState) => number;
