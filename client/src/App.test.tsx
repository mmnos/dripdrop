import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
  render(<App />);
  const h1Element = screen.getByText(
    /Hello Chris and his cute little soon to be baby/i
  );
  expect(h1Element).toBeInTheDocument();
});
