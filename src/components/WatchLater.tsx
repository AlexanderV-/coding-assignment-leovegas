import React from "react";
import { Link } from "react-router-dom";
import {
  removeAllWatchLater,
  selectWatchLaterMovies,
} from "../data/watchLaterSlice";
import Movie from "./Movie";
import "../styles/starred.scss";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IMovie } from "../data/apiSlice";

const WatchLater = () => {
  const dispatch = useAppDispatch();
  const wMoviesLater = useAppSelector(selectWatchLaterMovies);
  const isEmpty = wMoviesLater.length === 0;

  const onClickRemoveAll = () => {
    dispatch(removeAllWatchLater());
  };

  if (isEmpty) {
    return (
      <div className="starred" data-testid="watch-later-div">
        <div className="text-center empty-cart">
          <i className="bi bi-heart" />
          <p>You have no movies saved to watch later.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="starred" data-testid="watch-later-div">
      <div data-testid="watch-later-movies" className="starred-movies">
        <h6 className="header">Watch Later List</h6>
        <div className="row">
          {wMoviesLater.map((movie: IMovie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>

        <footer className="text-center">
          <button className="btn btn-primary" onClick={onClickRemoveAll}>
            Empty list
          </button>
        </footer>
      </div>
    </div>
  );
};

export default React.memo(WatchLater);
