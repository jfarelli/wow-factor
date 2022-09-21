import './MovieDetails.css'
import React from 'react'
// import oval from '../../assets/oval.svg'
import wilson from "/Users/jordanfarelli/turing/mod3/projects/wow-factor/src/assets/wilson.jpeg";

const MovieDetails = ( { movie, videos } ) => {
    // console.log('MOVIES: ', movies)
    // console.log('VIDEOS[0]: ', videos[0])
  // return movies.map( movie => {
  
  return (
    <div className='movie-details-container' key={ movie.timestamp }>
      <img src={movie.poster} className='poster-img'/>
      <div className='trailer-and-details-container'>
        <iframe
          src={ movie.video['1080p'] }
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          width="640"
          height="360"/>
        <div className='movie-details'>
            <p>Character: { movie.character }</p>
            <p>Line: "{ movie.full_line }"</p>
            <p>'Wow' Count at Clip: { movie.current_wow_in_movie }</p>
            <p>Total 'Wow' Count in Movie: { movie.total_wows_in_movie }</p>
        </div>
      </div>
    </div>
  )
// } )
}

export default MovieDetails
