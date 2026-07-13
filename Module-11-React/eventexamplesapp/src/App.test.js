import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import CurrencyConvertor from './CurrencyConvertor';

test('renders counter with initial value 0', () => {
  render(<App />);
  expect(screen.getByText(/Count:/)).toBeInTheDocument();
});

test('increment button increases counter', () => {
  render(<App />);
  const incButton = screen.getByText('Increment');
  fireEvent.click(incButton);
  expect(screen.getByText(/Count:/)).toHaveTextContent('1');
});

test('decrement button decreases counter', () => {
  render(<App />);
  const decButton = screen.getByText('Decrement');
  fireEvent.click(decButton);
  expect(screen.getByText(/Count:/)).toHaveTextContent('-1');
});

test('Say Welcome displays welcome message', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Say Welcome'));
  expect(screen.getByText('welcome')).toBeInTheDocument();
});

test('OnPress displays I was clicked', () => {
  render(<App />);
  fireEvent.click(screen.getByText('OnPress'));
  expect(screen.getByText('I was clicked')).toBeInTheDocument();
});

test('CurrencyConvertor renders input and button', () => {
  render(<CurrencyConvertor />);
  expect(screen.getByPlaceholderText('Enter amount in INR')).toBeInTheDocument();
  expect(screen.getByText('Convert')).toBeInTheDocument();
});