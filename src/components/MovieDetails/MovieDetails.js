import './MovieDetails.css'
import React from 'react'
// import oval from '../../assets/oval.svg'
// import wilson from "/Users/jordanfarelli/turing/mod3/projects/wow-factor/src/assets/wilson.jpeg";

const MovieDetails = ( { movies, videos } ) => {
    console.log('MOVIES[0]: ', movies[0])
    console.log('VIDEOS[0]: ', videos[0])

  return (
    <div className='movie-details-container'>
      <div className='movie-poster'>
        <img src={ movies[0].poster } className='poster-img'/>
      </div>
      <div className='trailer-and-details-container'>
        
      </div>
    </div>
  )
}

export default MovieDetails
