import './SingleMovie.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleMovie = ({ id, title, poster, displaySingleMovie }) => {
	return (
		<div className="single-movie-container">
			<Link to={`/details`}>
				<img
					id={id}
					key={id}
					src={poster}
					alt={`Movie poster for ${title}`}
					className="single-card-image"
					onClick={() => displaySingleMovie(id)}
				/>
			</Link>
		</div>
	);
};

export default SingleMovie;

SingleMovie.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	displaySingleMovie: PropTypes.func.isRequired,
};
