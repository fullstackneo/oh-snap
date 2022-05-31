import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);
describe('About component', () => {
  // First Test
  it('render', () => {
    // Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
    render(<About />);
  });

  //Second Test
  it('matches snapshot DOM node structure', () => {
    // render About
    // the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<About />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});
