import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => (
  <nav className="NavBar" data-testid="navigation">
    <ul className="left-nav">
      <li>
        {' '}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products" data-testid="products-nav-link">
          Products
        </Link>
      </li>
      <li>
        <Link to="/login" data-testid="login">
          Login
        </Link>
      </li>
    </ul>
    <ul className="center-nav">
      <li>
        <Link to="/" className="home-logo">
          SneLux
        </Link>
      </li>
    </ul>
    <ul className="right-nav">
      <li>
        <Link to="/">Shop Now</Link>
      </li>
      <li>
        <Link to="/signup" data-testid="signup">
          Register
        </Link>
      </li>
      <li>
        <FaShoppingCart />
      </li>
    </ul>
  </nav>
);

export default NavBar;
