import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../redux/MovieSlice";
import MovieCard from "./MovieCard";

const MoviePage = () => {
  const movies = useSelector(getAllMovies);
  return (
    <div className="pt-40 pb-20 w-[100%] bg-[#090435] justify-center items-center m-auto">
      <div className="flex flex-wrap w-[90%] bg-[#131b34] gap-6 text-white justify-center m-auto items-center">
        {movies.Search.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviePage;
