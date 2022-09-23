import './Form.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Form = ( { movies, displaySingleMovie, randomize,  displayWowCount, setMovies, search, wows, setSearch } ) => {
  // console.log('SEARCH: ', search)
  const sortedMovies = movies.sort( ( a, b ) => b.year - a.year );
  const dropdownTitles = sortedMovies.map( movie => {
    return (
      <option
        key={ movie.timestamp }
        id={ movie.timestamp }
        value={ `${movie.timestamp}` }
        onClick={ (e) => handleMovieChange(e.target.value) }>{ movie.movie }</option>
    )
  } )

  const handleMovieChange = ( e ) => {
    // e.preventDefault();
    displaySingleMovie( e.target.value )
  }

  const handleWowChange = ( e ) => {
    // e.preventDefault();
    displayWowCount( e.target.value )
  }

  return (
		<form>
			
			<div className="button-container">
        <Link to={`/`}>
				  <button className="home-button">Home</button>
        </Link>
        <Link to={`/details`}>
				  <button className="random-button" onClick={randomize}>Random</button>
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
          { !movies.length ? (
        <Link to='/details'>
          <select 
            onChange={ handleMovieChange }  
            className='movie-title-dropdown'>
            <option value=""> 
              Select a Movie
            </option>
            { dropdownTitles }
            </select>
          </Link> ) : (
          <Link to='/movies'>
          <select onChange={ handleWowChange } className='wow-count-dropdown' placeholder='Choose "WOW" Count'>
            <option value=""> 
                Select 'WOW' Count
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='10'>10</option>
          </select>
          </Link> ) }
			</div>

		</form>
  )
}

export default Form;


































{/* <input
type='text'
name='movie-search'
handleInput={ handleInput }
onChange={( e ) => handleChange( e ) }></input> */}