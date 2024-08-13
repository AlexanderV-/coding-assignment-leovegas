import {
  createSearchParams,
  Link,
  NavLink,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/header.scss";
import { useRef } from "react";
import { selectStarredMovies } from "../data/starredSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setSearchQuery } from "../data/shareSlice";
import { moviesApi } from "../data/apiSlice";

const debounce = <T extends (...args: any[]) => void>(fn: T, delay = 1000) => {
  let timerId: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>): void => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => fn(...args), delay);
  };
};

const Header = () => {
  const starredMovies = useSelector(selectStarredMovies);
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    navigate("/");
    if (query !== "") {
      setSearchParams(createSearchParams({ search: query }));
    } else {
      setSearchParams();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(setSearchQuery(query));
  };

  const resetSearchBox = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      dispatch(setSearchQuery(""));
      dispatch(moviesApi.util.resetApiState());
    }
  };

  return (
    <header>
      <Link to="/" data-testid="home" onClick={resetSearchBox}>
        <i className="bi bi-film" />
      </Link>

      <nav>
        <NavLink
          to="/starred"
          data-testid="nav-starred"
          className="nav-starred"
        >
          {starredMovies.length > 0 ? (
            <>
              <i className="bi bi-star-fill bi-star-fill-white" />
              <sup className="star-number">{starredMovies.length}</sup>
            </>
          ) : (
            <i className="bi bi-star" />
          )}
        </NavLink>
        <NavLink to="/watch-later" className="nav-fav">
          watch later
        </NavLink>
      </nav>

      <div className="input-group rounded">
        <div className="search-link">
          <input
            type="search"
            ref={inputRef}
            data-testid="search-movies"
            onChange={debounce(onSearchTextChange, 1000)}
            className="form-control rounded"
            placeholder="Search movies..."
            aria-label="Search movies"
            aria-describedby="search-addon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
