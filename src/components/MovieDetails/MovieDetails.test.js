import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetails from './MovieDetails';
import singleMovie from '../../mockData/singleMovieMockData';

describe('MovieDetails', () => {
  test('render', () => {
    render(<MovieDetails singleMovie={singleMovie} />);

    const posterElement = screen.getByAltText('Movie poster for Hall Pass');
    expect(posterElement).toBeInTheDocument();

    const videoElement = screen.getByTitle('YouTube Video');
    expect(videoElement).toBeInTheDocument();

    const characterElement = screen.getByText('Rick Mills');
    expect(characterElement).toBeInTheDocument();

    const quoteElement = screen.getByText(
      '"Wow. That\'s a biggie. Happy birthday."'
    );
    expect(quoteElement).toBeInTheDocument();

    const totalWowsElement = screen.getByText(6);
    expect(totalWowsElement).toBeInTheDocument();
  });
});
