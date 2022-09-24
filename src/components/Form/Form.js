import "./Form.css";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Form = ({
  movies,
  displaySingleMovie,
  randomize,
  displayWowCount,
  singleMovie,
}) => {
  // const sortedMovies = movies.sort((a, b) => a.moive - b.movie);
  const sortedMovies = movies.sort((a, b) => {
    let first = a.movie.toLowerCase(), second = b.movie.toLowerCase();
    if ( first < second){
      return -1
    }
    if (first > second ) {
      return 1
    }
  });
  console.log('SORTED: ', sortedMovies)
  const dropdownTitles = sortedMovies.map((movie) => {
    console.log('MOVIE.MOVIE: ', movie.movie)
    return (
      <option
        key={movie.timestamp}
        id={movie.timestamp}
        value={movie.movie}
        onClick={(e) => handleMovieChange(e.target.value)}
      >
        {movie.movie}
      </option>
    );
  });
  const handleMovieChange = (e) => {
    displaySingleMovie(e.target.value);
  };

  const handleWowChange = (e) => {
    displayWowCount(e.target.value);
  };

  return (
    <form>
      <div className="button-container">
        <Link to={`/`}>
          <button className="home-button">Home</button>
        </Link>
        <Link to={`/details`}>
          <button className="random-button" onClick={randomize}>
            Random
          </button>
        </Link>
      </div>
      <div className="dropdown-container">
        {singleMovie ? (
          <Link to="/details">
            <select
              onChange={handleMovieChange}
              className="movie-title-dropdown"
            >
              <option value="">Select a Movie</option>
              {dropdownTitles}
            </select>
          </Link>
        ) : !singleMovie ? ( // WHY IS THIS NOT WORKING NOW?!!????
          <Link to="/movies">
            <select
              onChange={handleWowChange}
              className="wow-count-dropdown"
              placeholder='Choose "WOW" Count'
            >
              <option value="">Select 'WOW' Count</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="10">10</option>
            </select>
          </Link>
        ) : (
          singleMovie
        )}
      </div>
    </form>
  );
};

export default Form;

Form.propTypes = {
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
  displaySingleMovie: PropTypes.func.isRequired,
  randomize: PropTypes.func.isRequired,
  displayWowCount: PropTypes.func.isRequired,
};
