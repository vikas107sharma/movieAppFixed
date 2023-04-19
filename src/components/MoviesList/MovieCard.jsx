import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="h-[380px] w-[230px] m-auto mt-3 mb-10 transition-all ease-out duration-300 hover:scale-105">
        <img className="w-[100%] h-[340px]" src={movie.Poster} alt={movie.Title} />
        <h1>{movie.Title}</h1>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
