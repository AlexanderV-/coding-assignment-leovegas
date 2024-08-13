import React from "react";
import { IMovie } from "../data/apiSlice";
interface MovieProps extends IMovie {
}
declare const Movie: React.FC<MovieProps>;
export default Movie;
