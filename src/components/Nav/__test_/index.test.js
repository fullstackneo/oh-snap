import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });
  // snapshot test
  it('matches snapshot', () => {
    // render Nav
    // the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  it('inserts text into the links', () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});
