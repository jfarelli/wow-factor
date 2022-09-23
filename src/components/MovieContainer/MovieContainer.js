import './MovieContainer.css'
import React from 'react'
import { useEffect } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie'

const MovieContainer = ( { movies, wows, videos, displaySingleMovie, searchResults } ) => {

    const sortedMovies = movies.sort( ( a, b ) => b.year - a.year );

    const movieCards = 
    !wows.length ? (
    sortedMovies.map( movie => {
        return ( 
            <SingleMovie 
                id={ movie.timestamp }
                key={ movie.timestamp }
                title={ movie.movie }
                poster={ movie.poster }
                videos={ videos }
                displaySingleMovie={ displaySingleMovie }
                />
        )
    } ) ) 
    // : !wows.length ? (
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
      : ( wows.map( movie => {
      return ( 
          <SingleMovie 
              id={ movie.timestamp }
              key={ movie.timestamp }
              title={ movie.movie }
              poster={ movie.poster }
              videos={ videos }
              displaySingleMovie={ displaySingleMovie }
              />
      ) } ) )
       
  return (
    <div className='movie-card-collection'>
      { movieCards }
    </div>
  )
}

export default MovieContainer
