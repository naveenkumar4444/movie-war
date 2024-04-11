import React from "react";
import MoviesData from "../components/MoviesData";
import { useMovieContext } from "../components/ContextAPI";

function Home() {

  const { movies } = useMovieContext()  

  return (
    <div>
      <MoviesData data={movies} />
    </div>
  );
}

export default Home;
