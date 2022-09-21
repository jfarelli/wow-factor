import './Form.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Form = ( { movies, displaySingleMovie } ) => {

  const [ movieTitle, setMovieTitle ] = useState( '' )

  const sortedMovies = movies.sort( ( a, b ) => b.year - a.year );
  const dropdownTitles = sortedMovies.map( movie => {
    return (
      <option
        key={ movie.timestamp }
        id={ movie.timestamp }
        value={ `${movie.timestamp}` }>{ movie.movie }</option>
    )
  } )

  const handleChange = ( e ) => {
    setMovieTitle( e.target.value )
    displaySingleMovie( e.target.value )
  }

  return (
		<form>
			
			<div className="button-container">
        <Link to={`/`}>
				<button className="home-button">Home</button>
        </Link>
				<button className="random-button">Random</button>
			</div>
			<div className="dropdown-container">
        <Link to='/details'>
          <select 
            value={ movieTitle }
            onChange={ ( e ) => handleChange( e ) }
            className='movie-title-dropdown'>
          {/* add disabled to option value after quotes */}
            <option value=""> 
              Select a Movie
            </option>
            { dropdownTitles }
            </select>
          </Link>
          <select className='wow-count-dropdown' placeholder='Choose "WOW" Count'>
            <option value="" > 
                Select 'WOW' Count
              </option>
          </select>
			</div>

		</form>
  )
}

export default Form;
