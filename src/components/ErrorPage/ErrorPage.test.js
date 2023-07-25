import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from './ErrorPage';
import { BrowserRouter } from 'react-router-dom';

describe('ErrorPage', () => {
	test('render', () => {
		render(<ErrorPage />, { wrapper: BrowserRouter });

		const imageElement = screen.getByAltText('face');
		expect(imageElement).toBeInTheDocument();

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();
	});
});
