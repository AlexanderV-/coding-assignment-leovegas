import React, { useCallback, useMemo, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../data/store";
import { makeSelectStarredMovieById, starMovie } from "../data/starredSlice";
import { IMovie } from "../data/apiSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
  watchLater,
  makeSelectWatchLaterMovieById,
} from "../data/watchLaterSlice";
import { setYTModal } from "../data/shareSlice";

interface MovieProps extends IMovie {}

const Movie: React.FC<MovieProps> = memo(
  ({ id, title, overview, poster_path, release_date }) => {
    const dispatch = useAppDispatch();

    const selectStarredMovieById = useMemo(makeSelectStarredMovieById, []);
    const selectWatchLaterMovieById = useMemo(
      makeSelectWatchLaterMovieById,
      []
    );

    const isWatchLater = useSelector((state: RootState) =>
      selectWatchLaterMovieById(state, id)
    );

    const isStarred = useSelector((state: RootState) =>
      selectStarredMovieById(state, id)
    );

    const handleStarClick = useCallback(() => {
      dispatch(starMovie({ id, title, overview, poster_path, release_date }));
    }, [dispatch, id, overview, poster_path, release_date, title]);

    const handleWatchLaterClick = useCallback(() => {
      dispatch(watchLater({ id, title, overview, poster_path, release_date }));
    }, [dispatch, id, overview, poster_path, release_date, title]);

    const handleCardClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.classList.add("opened");
      },
      []
    );

    const handleCloseClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.currentTarget.parentElement?.parentElement?.classList.remove(
          "opened"
        );
      },
      []
    );

    const onViewTrailer = useCallback(() => {
      dispatch(setYTModal({ movieId: id }));
    }, [dispatch, id]);

    const posterUrl = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : require("../assets/images/not-found-500X750.jpeg");

    return (
      <div className="wrapper col-3 col-sm-4 col-md-3 col-lg-3 col-xl-2">
        <div className="card" onClick={handleCardClick}>
          <div className="card-body text-center">
            <div className="overlay" />
            <div className="info_panel">
              <div className="overview">{overview}</div>
              <div className="year">{release_date?.substring(0, 4)}</div>
              <span
                className="btn-star"
                data-testid={isStarred ? "unstar-link" : "starred-link"}
                onClick={handleStarClick}
              >
                <i className={`bi ${isStarred ? "bi-star-fill" : "bi-star"}`} />
              </span>
              <button
                type="button"
                data-testid={
                  isWatchLater ? "remove-watch-later" : "watch-later"
                }
                className={`btn btn-light btn-watch-later ${
                  isWatchLater ? "blue" : ""
                }`}
                onClick={handleWatchLaterClick}
              >
                {isWatchLater ? <i className="bi bi-check" /> : "Watch Later"}
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={onViewTrailer}
              >
                View Trailer
              </button>
            </div>
            <img className="center-block" src={posterUrl} alt="Movie poster" />
          </div>
          <h6 className="title mobile-card">{title}</h6>
          <h6 className="title">{title}</h6>
          <button
            type="button"
            className="close"
            onClick={handleCloseClick}
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    );
  }
);

export default Movie;
