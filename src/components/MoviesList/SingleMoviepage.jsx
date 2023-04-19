import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import SingleMoviePageCard from "./SingleMoviePageCard";

const SingleMoviepage = () => {
  const [movie, setMovie] = useState({});
  const [f, setF] = useState(false);
  const id = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      await axios
        .get(`https://www.omdbapi.com/?apikey=b9e88753&i=${id.imdbID}&plot=full`)
        .then((response) => {
          console.log("Single Movie", response);
          setMovie(response.data);
          setF(true);
        })
        .catch((err) => {
          console.log("Movie Err", err);
        });
    };

    fetchMovie();
  }, []);

  return (
    <>
    <div> 
       {f&& <SingleMoviePageCard movie={movie} /> }
    </div>
    </>
  );
};

export default SingleMoviepage;
