import "./MovieContainer.css";
import React from "react";
import { useEffect } from "react";
import SingleMovie from "../SingleMovie/SingleMovie";
import PropTypes from "prop-types";

const MovieContainer = ({
  movies,
  wows,
  // videos,
  displaySingleMovie,
  // searchResults,
}) => {
  console.log("MOVIES: ", movies);
  console.log("WOWS: ", wows);
  const sortedMovies = movies.sort((a, b) => b.year - a.year);

  const movieCards = !wows.length
    ? sortedMovies.map((movie) => {
        return (
          <SingleMovie
            id={movie.timestamp}
            key={movie.timestamp}
            title={movie.movie}
            poster={movie.poster}
            // videos={ videos }
            displaySingleMovie={displaySingleMovie}
          />
        );
        // Swiper functionality for dynamic movie display
      })
    : // : !wows.length ? (
      //   searchResults.map( movie => {
      //       return (
      //           <SingleMovie
      //               id={ movie.timestamp }
      //               key={ movie.timestamp }
      //               title={ movie.movie }
      //               poster={ movie.poster }
      //               videos={ videos }
      //               displaySingleMovie={ displaySingleMovie }
      //               />
      //       )
      //   } ) )
      wows.map((movie) => {
        return (
          <SingleMovie
            id={movie.timestamp}
            key={movie.timestamp}
            title={movie.movie}
            poster={movie.poster}
            // videos={ videos }
            displaySingleMovie={displaySingleMovie}
          />
        );
      });

  return <div className="movie-card-collection">{movieCards}</div>;
};

export default MovieContainer;

MovieContainer.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      audio: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      current_wow_in_movie: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      full_line: PropTypes.string.isRequired,
      movie: PropTypes.string.isRequired,
      movie_duration: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      total_wows_in_movie: PropTypes.number.isRequired,
      video: PropTypes.object.isRequired,
      year: PropTypes.number.isRequired,
    })
  ),
  wows: PropTypes.arrayOf(
    PropTypes.shape({
      audio: PropTypes.string.isRequired, 
      character: PropTypes.string.isRequired,
      current_wow_in_movie: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      full_line: PropTypes.string.isRequired,
      movie: PropTypes.string.isRequired,
      movie_duration: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      total_wows_in_movie: PropTypes.number.isRequired,
      video: PropTypes.object.isRequired,
      year: PropTypes.number.isRequired,
    })
  ),
  displaySingleMovie: PropTypes.func.isRequired
};