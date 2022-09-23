import "./Form.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Form = ({
  movies,
  displaySingleMovie,
  randomize,
  displayWowCount,
  // setMovies,
  wows,
  // search,
  // setSearch,
  singleMovie
}) => {
  console.log('MOVIES: ', movies)
  console.log('WOWS: ', wows)
  const sortedMovies = movies.sort((a, b) => b.year - a.year);
  const dropdownTitles = sortedMovies.map((movie) => {
    return (
      <option
        key={movie.timestamp}
        id={movie.timestamp}
        value={`${movie.timestamp}`}
        onClick={(e) => handleMovieChange(e.target.value)}
      >
        {movie.movie}
      </option>
    );
  });

  const handleMovieChange = (e) => {
    // e.preventDefault();
    displaySingleMovie(e.target.value);
  };

  const handleWowChange = (e) => {
    // e.preventDefault();
    displayWowCount(e.target.value);
  };
  console.log('SINGLEMOVIE: ', singleMovie)

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
        {/* <Link to='/movies'>
        <input
          id="search"
          type="text"
          placeholder="Search Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}/> */}
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
        ) :  (
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
        ) }
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
  // search: PropTypes.func.isRequired,
  // setSearch: PropTypes.func.isRequired,
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
  // setMovies: PropTypes.func.isRequired,
};

{
  /* <input
type='text'
name='movie-search'
handleInput={ handleInput }
onChange={( e ) => handleChange( e ) }></input> */
}
