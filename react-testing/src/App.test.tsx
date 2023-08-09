import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Run", () => {
  test('should render the App correctly', () => {
    render(<App />);
    screen.debug();
  });

  // exact match
  test('should render the label text', () => {
    render(<App />);
    screen.getByText("Add your favourite color:");
    expect(screen.getByText("Add your favourite color:")).toBeInTheDocument();
    // expect(screen.getByText("Add your favourite color")).toBeInTheDocument(); // failing
    let error;
    try {
      screen.getByText("Add your favourite color")
    } catch (err) {
      error = err
    }
    expect(error).toBeDefined();
  });

  // part to be match
  test('should render the part of label text using regEx', () => {
    render(<App />);
    screen.getByText(/favourite color/);
    expect(screen.getByText(/Add your favourite color/)).toBeInTheDocument(); 
  });

});