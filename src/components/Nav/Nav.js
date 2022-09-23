import "./Nav.css";
import wilson from "/Users/jordanfarelli/turing/mod3/projects/wow-factor/src/assets/wilson.jpeg";
import React from "react";
import Form from "../Form/Form";

const Nav = ( { movies, displaySingleMovie, randomize,  displayWowCount, search, setSearch, dropdown, selectMovieFromDropdown, wows, setMovies } ) => {


  return (
    <div className="nav-container">
			<div className="wilson-face-and-bubble-container">
      	<img src={ wilson } className="wilson-face" />
				<div className="wow-bubble">Wooooooow!</div>
			</div>
			<Form 
        movies={ movies } 
        displaySingleMovie={ displaySingleMovie } 
        randomize={ randomize } 
        displayWowCount={ displayWowCount }
        search={search} 
        dropdown={ dropdown }
        selectMovieFromDropdown={ selectMovieFromDropdown }
        setSearch={setSearch}
        wows={ wows }
        setMovies={ setMovies }/>
    </div>
  );
};

export default Nav;


{/* <span style="--i:1;">✨</span>
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
     <span style="--i:16;">✨</span> */}