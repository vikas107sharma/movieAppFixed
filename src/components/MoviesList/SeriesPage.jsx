import React from "react";
import { useSelector } from "react-redux";
import { getAllSeries } from "../redux/MovieSlice";
import MovieCard from "./MovieCard";

const MoviePage = () => {
  const series = useSelector(getAllSeries);
  return (
    <div className="pt-40 pb-20 justify-center w-[100%] items-center bg-[#090435] ">
      <div className="flex flex-wrap w-[90%] gap-6 bg-[#031933] m-auto text-white justify-center items-center">
        {series.Search.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviePage;
