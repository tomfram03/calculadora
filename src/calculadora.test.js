import React from 'react';
import { render } from '@testing-library/react';
import Caculadora from './caculadora';

test('renders learn react link', () => {
  const { getByText } = render(<Caculadora />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
