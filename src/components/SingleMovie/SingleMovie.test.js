import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SingleMovie from './SingleMovie';
import { BrowserRouter } from 'react-router-dom';

describe('SingleMovie', () => {
  const id = 'Are You Here';
  const title = 'Are You Here';
  const poster =
    'https://images.ctfassets.net/bs8ntwkklfua/5MTYDabi9XISR4rMJbUhf6/bc3dd8e30c7662aed5d8db6c6be16af7/Are_You_Here_Poster.jpg';
  const displaySingleMovie = jest.fn();

  test('render', () => {
    render(
      <SingleMovie
        id={id}
        key={id}
        title={title}
        poster={poster}
        displaySingleMovie={displaySingleMovie}
      />,
      { wrapper: BrowserRouter }
    );

    const singleMovieTitleElement = screen.getByAltText(
      'Movie poster for Are You Here'
    );
    expect(singleMovieTitleElement).toBeInTheDocument();

    const singleMoviePosterElement = screen.getByAltText(
      'Movie poster for Are You Here'
    );
    expect(singleMoviePosterElement).toBeInTheDocument();
  });
});
