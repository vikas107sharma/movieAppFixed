import React from "react";
import { getAllMovies, getAllSeries } from "../redux/MovieSlice";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const MoviesListing = ({ ListName }) => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  console.log("List of movies from getaAllMovies", movies);
  console.log("List of movies from getaAllSeries", series);

  let renderMovies = "";
  let renderSeries = "";

  renderMovies =
    movies.Response === "True" ? (
      movies?.Search.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })
    ) : (
      <div className="movies_error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderSeries =
    series.Response === "True" ? (
      series?.Search.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })
    ) : (
      <div className="movies_error">
        <h3>{movies.Error}</h3>
      </div>
    );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="">
        {ListName === "movies" ? (
          <div className="">
            <Slider {...settings}>{renderMovies}</Slider>
          </div>
        ) : (
          <div className="">
            <Slider {...settings}>{renderSeries}</Slider>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesListing;
