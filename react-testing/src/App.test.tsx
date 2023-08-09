import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { log } from 'console';

describe("App Run", () => {
  beforeEach (() => {
    render(<App />);
  });
  test('should render the App correctly', () => {
    screen.debug();
  });

  // exact match
  test('should render the label text', () => {
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
    screen.getByText(/favourite color/);
    expect(screen.getByText(/Add your favourite color/)).toBeInTheDocument(); 
  });

  test('should select input element by its role', () => {
    screen.getByRole("textbox");
    expect(screen.getByRole("textbox")).toBeInTheDocument(); 
  });

  test('should select label element by its text', () => {
    screen.getByLabelText("Add your favourite color:");
    expect(screen.getByLabelText("Add your favourite color:")).toBeInTheDocument(); 
  });

  test('should select input element by placeholder text', () => {
    screen.getByPlaceholderText("color");
    expect(screen.getByPlaceholderText("color")).toBeInTheDocument(); 
  });

  //queryBy
  test('should select input element by its role using queryBy', () => {
    const result = screen.queryByRole("textbox");
    console.log(result);
    expect(screen.queryByRole("textbox")).not.toBeNull();
  });

  test('should return null when select "example" by its role using queryBy', () => {
    const result = screen.queryByRole("example");
    console.log(result);
    expect(screen.queryByRole("example")).toBeNull();
  });


});