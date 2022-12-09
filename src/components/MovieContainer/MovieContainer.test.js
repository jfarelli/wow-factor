import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieContainer from './MovieContainer';
import Nav from '../Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import sortedMovies from '../../mockData/sortedMoviesMockData';
import wows from '../../mockData/wowsMockData';

describe('MovieContainer', () => {
  const displaySingleMovie = jest.fn();
  const displayWowCount = jest.fn();
  const randomize = jest.fn();
  const setSingleMovie = jest.fn();

  test('render', () => {
    render(
      <>
        <Nav
          displaySingleMovie={displaySingleMovie}
          displayWowCount={displayWowCount}
          randomize={randomize}
          setSingleMovie={setSingleMovie}
          sortedMovies={sortedMovies}
          wows={wows}
        />
        <MovieContainer
          wows={wows}
          displaySingleMovie={displaySingleMovie}
          sortedMovies={sortedMovies}
        />
      </>,
      { wrapper: BrowserRouter }
    );

    const wilsonFaceElement = screen.getByAltText('wilson-face');
    expect(wilsonFaceElement).toBeInTheDocument();

    const woooooowTextElement = screen.getByText('Wooooooow!');
    expect(woooooowTextElement).toBeInTheDocument();

    const movieCardOneElement = screen.getByAltText(
      'Movie poster for Hall Pass'
    );
    expect(movieCardOneElement).toBeInTheDocument();

    const movieCardTwoElement = screen.getByAltText(
      'Movie poster for Wedding Crashers'
    );
    expect(movieCardTwoElement).toBeInTheDocument();
  });
});
