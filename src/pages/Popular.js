import React, { useEffect } from 'react';
import Title from '../components/Title';
import MoviesData from "../components/MoviesData";
import { useMovieContext } from "../components/ContextAPI";

const Popular = () => {

  const { movies, fetchMovies } = useMovieContext()

  useEffect(() => {

    fetchMovies("popular")

  }, [])


  return (
    <div>
      <Title title="Popular" />
      {movies &&
        <MoviesData data={movies} />
      }
    </div>
  );
};

export default Popular;
