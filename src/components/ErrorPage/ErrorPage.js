import './ErrorPage.css'
import React from 'react'
import wilson from "/Users/jordanfarelli/turing/mod3/projects/wow-factor/src/assets/wilson-surprise.webp";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page-container'>
      <div className="error-face-and-bubble-container">
      	<img src={ wilson } className="error-wilson" />
				<div className="error-bubble">Wooow! <br></br>Something went wrong!</div>
			</div>
      <div className='error-container-for-button'>
      <Link to={`/movies`}>
        <button className='error-go-to-movies-button' >Show Me The Wilson</button>
      </Link>
      </div>
    </div>
  )
}

export default ErrorPage
