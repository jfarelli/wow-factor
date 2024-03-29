import './MovieContainer.css';
import React from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';
import PropTypes from 'prop-types';

const MovieContainer = ({ wows, sortedMovies, displaySingleMovie }) => {
	const movieCards = !wows.length
		? sortedMovies.map((movie) => {
				return (
					<SingleMovie
						id={movie.movie}
						key={movie.movie}
						title={movie.movie}
						poster={movie.poster}
						displaySingleMovie={displaySingleMovie}
					/>
				);
		  })
		: wows.map((movie) => {
				return (
					<SingleMovie
						id={movie.movie}
						key={movie.movie}
						title={movie.movie}
						poster={movie.poster}
						displaySingleMovie={displaySingleMovie}
					/>
				);
		  });

	return <div className="movie-card-collection">{movieCards}</div>;
};

export default MovieContainer;

MovieContainer.propTypes = {
	wows: PropTypes.arrayOf(
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
	displaySingleMovie: PropTypes.func.isRequired,
};
