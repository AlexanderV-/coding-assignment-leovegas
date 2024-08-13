import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  selectPage,
  nextPage as nextPageAction,
  defaultPage,
} from "../data/shareSlice";
import { debounce } from "../utils/debounce";

export const usePagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const nextPage = useCallback(() => dispatch(nextPageAction()), [dispatch]);
  const setDefault = useCallback(() => dispatch(defaultPage()), [dispatch]);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (scrolledToBottom) {
        nextPage();
      }
    };

    const debouncedHandleScroll = debounce(onScroll, 300);
    document.addEventListener("scroll", debouncedHandleScroll);

    return function () {
      document.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [nextPage, page]);

  return { page, nextPage, setDefault };
};
