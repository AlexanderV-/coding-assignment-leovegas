import React from "react";
import { Link } from "react-router-dom";
import { clearAllStarred, selectStarredMovies } from "../data/starredSlice";
import Movie from "./Movie";
import "../styles/starred.scss";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IMovie } from "../data/apiSlice";

const Starred = () => {
  const dispatch = useAppDispatch();
  const starredMovies = useAppSelector(selectStarredMovies);
  const isEmpty = starredMovies.length === 0;

  const onClickRemoveAll = () => {
    dispatch(clearAllStarred());
  };

  if (isEmpty) {
    return (
      <div className="starred" data-testid="starred">
        <div className="text-center empty-cart">
          <i className="bi bi-star" />
          <p>There are no starred movies.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="starred" data-testid="starred">
      <div data-testid="starred-movies" className="starred-movies">
        <h6 className="header">Starred movies</h6>
        <div className="row">
          {starredMovies.map((movie: IMovie) => (
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
            Remove all starred
          </button>
        </footer>
      </div>
    </div>
  );
};

export default React.memo(Starred);
