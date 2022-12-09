import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import { BrowserRouter } from 'react-router-dom';
import sortedMovies from '../../mockData/sortedMoviesMockData';
import singleMovie from '../../mockData/singleMovieMockData';

describe('Form', () => {
  const displaySingleMovie = jest.fn();
  const displayWowCount = jest.fn();
  const randomize = jest.fn();

  test('render', () => {
    render(
      <Form
        displaySingleMovie={displaySingleMovie}
        displayWowCount={displayWowCount}
        randomize={randomize}
        singleMovie={singleMovie}
        sortedMovies={sortedMovies}
      />,
      { wrapper: BrowserRouter }
    );

    const homeButtonElement = screen.getByText('Home');
    expect(homeButtonElement).toBeInTheDocument();

    const randomButtonElement = screen.getByText('Random');
    expect(randomButtonElement).toBeInTheDocument();

    const dropDownDisplayElement = screen.getByDisplayValue('Select a Movie');
    expect(dropDownDisplayElement).toBeInTheDocument();
  });
});
