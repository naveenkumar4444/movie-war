import React from "react";
import { FcRating } from "react-icons/fc";

function Card({ item }) {
  return (
    <a className="card-link" href={`/details/${item.id}`}>
      <div className="card">
        <div className="card-info">
          <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <h3>{item.title}</h3>
          <div className="card-rating"><FcRating /> &nbsp; {item.vote_average}</div>
        </div>
      </div>
    </a>
  );
}

export default Card;
