export declare const usePagination: () => {
    page: number;
    nextPage: () => {
        payload: undefined;
        type: "share/nextPage";
    };
    setDefault: () => {
        payload: undefined;
        type: "share/defaultPage";
    };
};
