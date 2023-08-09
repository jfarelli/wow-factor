import './MovieDetails.css';
import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = ({ singleMovie }) => {
	return (
		<div
			data-testid="movie-details"
			className="movie-details-container"
			key={singleMovie.timestamp}
		>
			<img
				src={singleMovie.poster}
				className="poster-img"
				alt={`Movie poster for ${singleMovie.movie}`}
			/>
			<div className="trailer-and-details-container">
				<div className="iframe-wrapper">
					<iframe
						src={singleMovie.video['1080p']}
						allow="autoplay; fullscreen; picture-in-picture"
						title="YouTube Video"
						width="640"
						height="360"
					/>
				</div>
				<div className="movie-details">
					<p style={{ marginBottom: '3.5%' }}>
						<b className='wow-count'>WOW Count in {singleMovie.movie}
						</b>
					</p>
					<p>
						WOW's at Clip ({singleMovie.timestamp}):{' '}
						<b>{singleMovie.current_wow_in_movie}</b>
					</p>
					<p>
						Total WOW's: <b>{singleMovie.total_wows_in_movie}</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;

MovieDetails.propTypes = {
	singleMovie: PropTypes.shape({
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
	}),
};
