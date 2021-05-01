import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from 'features';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/True/i);
  expect(linkElement).toBeInTheDocument();
});
