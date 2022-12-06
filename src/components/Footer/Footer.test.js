import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {

  test('Should render name on Footer', () => {
    render(<Footer />);
    const textElement = screen.getByText('Jordan Farelli');
    expect(textElement).toBeInTheDocument();
  });

  test('Should render LinkedIn icon on Footer', () => {
    render(<Footer />);
    const linkedInElement = screen.getByTitle('linkedin')
    expect(linkedInElement).toBeInTheDocument();
  });

  test('Should render GitHub icon on Footer', () => {
    render(<Footer />);
    const giHhubElement = screen.getByTitle('github')
    expect(giHhubElement).toBeInTheDocument();
  });

});
