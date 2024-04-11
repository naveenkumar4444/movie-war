import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

const API_KEY = "a7b8ea2f329dcb5f63c26fc43b249ed4"

const ContextAPI = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [details, setDetails] = useState(null);

  const fetchMovies = (type, page=1) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        // console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const fetchMovieDetails = async (id) => {

    try {
      const details = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      const cast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)

      setDetails({ details: details.data, cast: cast.data })

    } catch (error) {
      console.log(error.message);
    }

  };

  const searchMovies = async (keyword) => {

    try {
      const details = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}`)
      // console.log("details", details.data);
      setMovies(details.data)

    } catch (error) {
      console.log(error.message);
    }

  };

  return (
    <UserContext.Provider value={{ movies, fetchMovies, details, fetchMovieDetails, searchMovies }}>
      {children}
    </UserContext.Provider>
  );
};

const useMovieContext = () => useContext(UserContext);

export { ContextAPI, useMovieContext };
