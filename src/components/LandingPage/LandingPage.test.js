import { getByAltText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from './LandingPage';
import { BrowserRouter } from 'react-router-dom';

describe('LandingPage', () => {
	const setSingleMovie = jest.fn();
	const setWows = jest.fn();

	test('renders', () => {
		render(<LandingPage setSingleMovie={setSingleMovie} setWows={setWows} />, {
			wrapper: BrowserRouter,
		});

		const imageElement = screen.getByAltText('face');
		expect(imageElement).toBeInTheDocument();

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();
	});
});
