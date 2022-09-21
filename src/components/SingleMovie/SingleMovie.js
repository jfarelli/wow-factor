import "./SingleMovie.css";
import React from "react";

const SingleMovie = ( { id, title, videos, poster } ) => {
  return (
    <div className="single-movie-container">
        <img
          id={id}
          src={poster}
          alt={`Movie poster for ${title}`}
          className="single-card-image"
        />
    </div>
  );
};

export default SingleMovie;
