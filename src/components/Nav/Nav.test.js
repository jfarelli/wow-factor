import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';
import sortedMovies from '../../mockData/sortedMoviesMockData';
import wows from '../../mockData/wowsMockData';

describe('Nav', () => {
  const displaySingleMovie = jest.fn();
  const displayWowCount = jest.fn();
  const randomize = jest.fn();
  const setSingleMovie = jest.fn();

  test('render', () => {
    render(
      <Nav
        displaySingleMovie={displaySingleMovie}
        displayWowCount={displayWowCount}
        randomize={randomize}
        setSingleMovie={setSingleMovie}
        sortedMovies={sortedMovies}
        wows={wows}
      />,
      { wrapper: BrowserRouter }
    );

    const imageElement = screen.getByAltText('wilson-face');
    expect(imageElement).toBeInTheDocument();

    const woooooowTextElement = screen.getByText('Wooooooow!');
    expect(woooooowTextElement).toBeInTheDocument();
  });
});
