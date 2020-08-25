import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { attemptLogin } from '../../actions/actions';
import FormBackground from '../../pictures/form_background.jpeg';
import { connect } from 'react-redux';
import loading from '../../pictures/loading.gif';

export const Login = ({ tryLogin, userState }) => {
  function handleLogin(e) {
    e.preventDefault();
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
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
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="username"
                  placeholder="Enter usename"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
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
