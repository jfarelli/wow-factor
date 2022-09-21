import "./SingleMovie.css";
import React from "react";
import { Link } from 'react-router-dom';

const SingleMovie = ( { id, title, videos, poster, displaySingleMovie } ) => {
  return (
    <div className="single-movie-container">
      <Link to={`/details`}>
        <img
          id={id}
          key={id}
          src={poster}
          alt={`Movie poster for ${title}`}
          className="single-card-image"
          onClick={ ( ) => displaySingleMovie( id ) }
        />
      </Link>
    </div>
  );
};

export default SingleMovie;
