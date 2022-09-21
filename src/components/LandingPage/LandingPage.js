import './LandingPage.css'
import React from 'react'
import wilson from "/Users/jordanfarelli/turing/mod3/projects/wow-factor/src/assets/wilson.jpeg";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <div className="face-and-bubble-container">
      	<img src={ wilson } className="wilson" />
				<div className="bubble">Wooooooow! <br></br>Thanks for stopping by! <br></br>What do you say we check out some movies?!</div>
			</div>
      <div className='container-for-button'>
      <Link to={`/movies`}>
        <button className='go-to-movies-button'>Show Me The Wilson</button>
      </Link>
      </div>
    </div>
  )
}

export default LandingPage
