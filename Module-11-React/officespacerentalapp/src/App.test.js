import { render, screen } from '@testing-library/react';
import App from './App';

test('renders office space rental heading', () => {
  render(<App />);
  const heading = screen.getByText(/office space rental app/i);
  expect(heading).toBeInTheDocument();
});

test('renders office list items', () => {
  render(<App />);
  const officeNames = screen.getAllByText(/Name:/);
  expect(officeNames.length).toBeGreaterThan(1);
});