import './Nav.css';
import wilson from '../../assets/wilson.jpeg';
import React from 'react';
import Form from '../Form/Form';
import PropTypes from 'prop-types';

const Nav = ({
	displaySingleMovie,
	displayWowCount,
	randomize,
	singleMovie,
	sortedMovies,
	playSound,
}) => {
	return (
		<div className="nav-container">
			<div className="wilson-face-and-bubble-container">
				<img src={wilson} alt="wilson-face" className="wilson-face" />
				<div
					onMouseOver={() => playSound(singleMovie.audio)}
					className="wow-bubble"
				>
					Wooooooow!
				</div>
			</div>
			<Form
				displaySingleMovie={displaySingleMovie}
				displayWowCount={displayWowCount}
				randomize={randomize}
				singleMovie={singleMovie}
				sortedMovies={sortedMovies}
			/>
		</div>
	);
};

export default Nav;

Nav.propTypes = {
	displaySingleMovie: PropTypes.func.isRequired,
	displayWowCount: PropTypes.func.isRequired,
	randomize: PropTypes.func.isRequired,
	singleMovie: PropTypes.arrayOf(
		PropTypes.shape({
			audio: PropTypes.string.isRequired,
			character: PropTypes.string.isRequired,
			current_wow_in_movie: PropTypes.number.isRequired,
			director: PropTypes.string.isRequired,
			full_line: PropTypes.string.isRequired,
			movie: PropTypes.string.isRequired,
			movie_duration: PropTypes.string.isRequired,
			poster: PropTypes.string.isRequired,
			release_date: PropTypes.string.isRequired,
			timestamp: PropTypes.string.isRequired,
			total_wows_in_movie: PropTypes.number.isRequired,
			video: PropTypes.object.isRequired,
			year: PropTypes.number.isRequired,
		})
	),
	sortedMovies: PropTypes.arrayOf(
		PropTypes.shape({
			audio: PropTypes.string.isRequired,
			character: PropTypes.string.isRequired,
			current_wow_in_movie: PropTypes.number.isRequired,
			director: PropTypes.string.isRequired,
			full_line: PropTypes.string.isRequired,
			movie: PropTypes.string.isRequired,
			movie_duration: PropTypes.string.isRequired,
			poster: PropTypes.string.isRequired,
			release_date: PropTypes.string.isRequired,
			timestamp: PropTypes.string.isRequired,
			total_wows_in_movie: PropTypes.number.isRequired,
			video: PropTypes.object.isRequired,
			year: PropTypes.number.isRequired,
		})
	),
};
