import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { logout } from '../../actions/actions';
import './NavBar.css';

const NavBar = ({ userState, handleLogout }) => (
  <nav className="NavBar" data-testid="navigation">
    <ul className="left-nav">
      <li>
        {' '}
        <Link to="/" data-testid="home">
          Home
        </Link>
      </li>
      <li>
        <Link to="/products" data-testid="products-nav-link">
          Products
        </Link>
      </li>
      {!userState.access ? (
        <li>
          <Link to="/login" data-testid="login">
            Login
          </Link>
        </li>
      ) : (
        ''
      )}
    </ul>
    <ul className="center-nav">
      <li>
        <Link to="/" className="home-logo">
          SneLux
        </Link>
      </li>
    </ul>
    <ul className="right-nav">
      {!userState.access ? (
        <li>
          <Link to="/signup" data-testid="signup">
            Register
          </Link>
        </li>
      ) : (
        ''
      )}

      {userState.access ? (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
        ''
      )}

      {userState.access ? (
        <>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </>
      ) : (
        ''
      )}
    </ul>
  </nav>
);
const mapStateToProps = (state) => ({
  userState: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
