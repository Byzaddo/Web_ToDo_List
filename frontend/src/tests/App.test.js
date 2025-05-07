import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders To-Do List heading', () => {
  render(<App />);
  const heading = screen.getByText(/To-Do List/i);
  expect(heading).toBeInTheDocument();
});