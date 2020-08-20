import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createStore } from 'redux';
import { render, fireEvent, screen } from './test-utils';

import App from '../App';

describe('tests the App renders the different pages', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the navigation when there is no user', () => {
    expect(screen.getByTestId('App')).toBeInTheDocument();
  });

  test('renders the navigation bar', () => {
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  test('renders the login page on click', () => {
    fireEvent.click(screen.getByTestId('login'));
    expect(screen.getByText('Login to your account')).toBeInTheDocument();
  });

  test('renders the product page correctly', () => {
    fireEvent.click(screen.getByTestId('products-nav-link'));
    expect(screen.getByTestId('all-products-div')).toBeInTheDocument();
  });

  test('renders the signup page from the navigation', () => {
    fireEvent.click(screen.getByTestId('signup'));
    expect(screen.getByTestId('signup-div')).toBeInTheDocument();
  });
  test('shows a spinner while fetching products', () => {
    fireEvent.click(screen.getByTestId('home'));
    expect(
      screen.getByTestId('fetching-trending-products')
    ).toBeInTheDocument();
  });
});
