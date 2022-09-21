import './MovieContainer.css'
import React from 'react'
import SingleMovie from '../SingleMovie/SingleMovie'

const MovieContainer = ( { movies, videos, displaySingleMovie } ) => {

    const sortedMovies = movies.sort( ( a, b ) => b.year - a.year );

    const movieCards = sortedMovies.map( movie => {
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
    } )
       
  return (
    <div className='movie-card-collection'>
      { movieCards }
    </div>
  )
}

export default MovieContainer
