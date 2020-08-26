import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { attemptLogin } from '../../actions/actions';
import FormBackground from '../../pictures/form_background.jpeg';
import { connect } from 'react-redux';
import loading from '../../pictures/loading.gif';
import { Link, Redirect } from 'react-router-dom';

export const Login = ({ tryLogin, userState }) => {
  if (userState.redirectTo) {
    return <Redirect to={userState.redirectTo} />;
  }
  function handleLogin(e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const user = {
      username,
      password,
    };
    tryLogin(user);
  }

  return (
    <div className="login-div-parent">
      <h1 className="login-account-title">Login to your account</h1>
      <div className="form-and-background-container container">
        <div className="row">
          <div className="col-md-8 inner-form-container">
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="form-group">
                {userState.isLogginIn ? (
                  <div className="login-animation-div">
                    <h2 className="login-animation-text">Please wait ...</h2>
                    <img
                      src={loading}
                      alt="loading"
                      className="loading-login-animation"
                    />
                  </div>
                ) : (
                  ''
                )}
                {userState.loginErrors ? (
                  <ul className="signup-errors">
                    {userState.loginErrors.map((error, index) => (
                      <li className="signup-error" key={index}>
                        {error}
                      </li>
                    ))}
                  </ul>
                ) : (
                  ''
                )}
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="username"
                  placeholder="Enter usename"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p className="create-account">
                Or you can {<Link to="/signup">Create an account</Link>}
              </p>
            </form>
          </div>
          <div className="col-md-4 form-picture-div"></div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  tryLogin: (user) => dispatch(attemptLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
