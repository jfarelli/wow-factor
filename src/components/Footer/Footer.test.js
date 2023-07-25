import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
	test('Should render name on Footer', () => {
		render(<Footer />);
		const textElement = screen.getByText('Jordan Farelli');
		expect(textElement).toBeInTheDocument();

		const linkedInElement = screen.getByTitle('linkedin');
		expect(linkedInElement).toBeInTheDocument();

		const giHhubElement = screen.getByTitle('github');
		expect(giHhubElement).toBeInTheDocument();
	});
});
