import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},

  series: {},

  term: "hollywood",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    addSeries: (state, { payload }) => {
      state.series = payload;
    },
    setTerm: (state, { payload }) => {
      state.term = payload;
    },
  },
});

export const { addMovies, addSeries,setTerm } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getTerm = (state) => state.movies.term;
export default movieSlice.reducer;
