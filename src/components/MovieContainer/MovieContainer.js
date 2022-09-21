import './MovieContainer.css'
import React from 'react'
import SingleMovie from '../SingleMovie/SingleMovie'

const MovieContainer = ( { movies, videos } ) => {

    const sortedMovies = movies.sort( ( a, b ) => b.year - a.year )

    const wowCards = sortedMovies.map( wow => {
        return ( 
            <SingleMovie 
                id={ wow.timestamp }
                key={ wow.timestamp }
                title={ wow.movie }
                poster={ wow.poster }
                videos={ videos }
                />
        )
    } )
       
  return (
    <div className='movie-card-collection'>
      { wowCards }
    </div>
  )
}

export default MovieContainer
