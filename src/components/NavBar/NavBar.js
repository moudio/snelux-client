import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul className="left-nav">
        <li>
          {' '}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <ul className="center-nav">
        <li>
          <Link>SneLux</Link>
        </li>
      </ul>
      <ul className="right-nav">
        <li>
          <Link>Shop Now</Link>
        </li>
        <li>
          <Link>
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  prop: PropTypes,
};

export default NavBar;
