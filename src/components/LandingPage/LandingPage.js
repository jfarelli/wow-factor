import './LandingPage.css';
import React from 'react';
import wilson from '../../assets/wilson.jpeg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LandingPage = ({ setSingleMovie, setWows }) => {
	const handleClick = () => {
		setSingleMovie('');
		setWows([]);
	};
	return (
		<div className="landing-page-container">
			<div className="face-and-bubble-container">
				<div className="wilson-img-container">
					<img src={wilson} className="wilson" alt="face" />
				</div>
				<div className="img-button-div-container">
					<div className="bubble" data-testid="bubble-display">
						<div className="bubble-text">
							Haaay! <br></br>Thanks for stopping by! <br></br>Wooow! <br></br>What do you say
							we check out some movies?! <br></br>...Where I say "Wooow!"
						</div>
					</div>
					<div>
						<Link to={`/movies`}>
							<button
								className="go-to-movies-button"
								onClick={() => handleClick()}
							>
								Show Me The Wilson
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;

LandingPage.propTypes = {
	setSingleMovie: PropTypes.func.isRequired,
	setWows: PropTypes.func.isRequired,
};
