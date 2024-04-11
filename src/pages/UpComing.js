import React, { useEffect } from 'react';
import Title from '../components/Title';
import MoviesData from "../components/MoviesData";
import { useMovieContext } from '../components/ContextAPI';

const UpComing = () => {

  const { movies, fetchMovies } = useMovieContext()

  useEffect(() => {

    fetchMovies("upcoming")

  }, [])

  return (
    <div>
      <Title title="Up-Coming" />
      {movies &&
        <MoviesData data={movies} />
      }
    </div>
  );
};

export default UpComing;
