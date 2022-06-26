import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from './Map';

test('renders learn react link', () => {
  render(<Map/>);
  const linkElement = screen.getByText(/Map/i);
  expect(linkElement).toBeInTheDocument();
});
