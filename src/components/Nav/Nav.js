import "./Nav.css";
import wilson from "/Users/jordanfarelli/turing/mod3/projects/wow-factor/src/assets/wilson.jpeg";
import React from "react";
import Form from "../Form/Form";
import PropTypes from "prop-types";

const Nav = ({
  movies,
  displaySingleMovie,
  randomize,
  displayWowCount,
  // search,
  // setSearch,
  // dropdown,
  wows,
  // setMovies,
  singleMovie
}) => {
  return (
    <div className="nav-container">
      <div className="wilson-face-and-bubble-container">
        <img src={wilson} className="wilson-face" />
        <div className="wow-bubble">Wooooooow!</div>
      </div>
      <Form
        movies={movies}
        displaySingleMovie={displaySingleMovie}
        randomize={randomize}
        displayWowCount={displayWowCount}
        // search={search}
        // setSearch={setSearch}
        // dropdown={dropdown}
        wows={wows}
        // setMovies={setMovies}
        singleMovie={singleMovie}
      />
    </div>
  );
};

export default Nav;

Nav.propTypes = {
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
  // dropdown: PropTypes.func.isRequired,
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
  /* <span style="--i:1;">✨</span>
      <span style="--i:2;">S</span>
      <span style="--i:3;">e</span>
      <span style="--i:4;">l</span>
      <span style="--i:5;">f</span>
      <span></span>
      <span style="--i:6;">C</span>
      <span style="--i:7;">a</span>
      <span style="--i:8;">r</span>
      <span style="--i:9;">e</span>
      <span></span>
      <span style="--i:10;">C</span>
      <span style="--i:11;">e</span>
      <span style="--i:12;">n</span>
      <span style="--i:13;">t</span>
      <span style="--i:14;">e</span>
      <span style="--i:15;">r</span>
     <span style="--i:16;">✨</span> */
}
