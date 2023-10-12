import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '..';

test('renders header in the app component', () => {
  render(<App />);
  const h1Element = screen.getByText(/dripdrop/i);
  expect(h1Element).toBeInTheDocument();
});
