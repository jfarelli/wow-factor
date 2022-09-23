import './LandingPage.css'
import React from 'react'
import wilson from "/Users/jordanfarelli/turing/mod3/projects/wow-factor/src/assets/wilson.jpeg";
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const LandingPage = ( {  setSingleMovie, setWows } ) => {
  // // 
  // const sortedMovies = movies.sort( ( a, b ) => b.year - a.year );
  // // onClick={setMovies(sortedMovies)}
  const handleClick = ( ) => {
    setWows([])
    setSingleMovie('')
  }

  return (
    <div className='landing-page-container'>
      <div className="face-and-bubble-container">
      	<img src={ wilson } className="wilson" />
				<div className="bubble">Wooow! <br></br>Thanks for stopping by! <br></br>What do you say we check out some movies?! <br></br>...Where I say 'Wooow!"</div>
			</div>
      <div className='container-for-button'>
      <Link to={`/movies`}>
        <button className='go-to-movies-button' onClick={handleClick}>Show Me The Wilson</button>
      </Link>
      </div>
    </div>
  )
}

export default LandingPage

// LandingPage.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       audio: PropTypes.string.isRequired, 
//       character: PropTypes.string.isRequired,
//       current_wow_in_movie: PropTypes.number.isRequired,
//       director: PropTypes.string.isRequired,
//       full_line: PropTypes.string.isRequired,
//       movie: PropTypes.string.isRequired,
//       movie_duration: PropTypes.string.isRequired,
//       poster: PropTypes.string.isRequired,
//       release_date: PropTypes.string.isRequired,
//       timestamp: PropTypes.string.isRequired,
//       total_wows_in_movie: PropTypes.number.isRequired,
//       video: PropTypes.object.isRequired,
//       year: PropTypes.number.isRequired,
//     })
//   ),
// };