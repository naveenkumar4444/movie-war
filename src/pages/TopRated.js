import React, { useEffect } from 'react';
import Title from '../components/Title';
import MoviesData from "../components/MoviesData";
import { useMovieContext } from '../components/ContextAPI';

const TopRated = () => {

  const { movies, fetchMovies } = useMovieContext()

  useEffect(() => {
    fetchMovies("top_rated")
  }, [])


  return (
    <div>
      <Title title="Top-Rated" />
      {movies &&
        <MoviesData data={movies} />}
    </div>
  );
};

export default TopRated;
