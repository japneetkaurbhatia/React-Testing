import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Run", () => {
  test('should render the App correctly', () => {
    render(<App />);
    screen.debug();
  });
});