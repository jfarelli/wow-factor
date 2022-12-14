import './ErrorPage.css';
import React from 'react';
import wilson from '../../assets/wilson-surprise.webp';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
      <div className="error-page-container">
        <div className="error-face-and-bubble-container">
          <img src={wilson} className="error-wilson" alt="face" />
          <div className="error-bubble">
            Wooow! <br></br>Something went wrong!
          </div>
        </div>
        <div className="error-container-for-button">
          <Link to='movies'>
            <button
              className="error-go-to-movies-button"
              data-testid="button-to-movies-container"
            >
              Back to Wilson
            </button>
          </Link>
        </div>
      </div>
  );
};

export default ErrorPage;
