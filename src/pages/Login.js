import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

export const Login = () => (
  <>
    <h1>Login to your account</h1>
    <div className="container">
      <div className="row">
        <div className="main">
          <h3>
            Please Log In, or <a href="#">Sign Up</a>
          </h3>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <a href="#" className="btn btn-lg btn-primary btn-block">
                Facebook
              </a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <a href="#" className="btn btn-lg btn-info btn-block">
                Google
              </a>
            </div>
          </div>
          <div className="login-or">
            <hr className="hr-or" />
            <span className="span-or">or</span>
          </div>

          <form role="form">
            <div className="form-group">
              <label for="inputUsernameEmail">Username or email</label>
              <input
                type="text"
                className="form-control"
                id="inputUsernameEmail"
              />
            </div>
            <div className="form-group">
              <a className="pull-right" href="#">
                Forgot password?
              </a>
              <label for="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <div className="checkbox pull-right">
              <label>
                <input type="checkbox" />
                Remember me{' '}
              </label>
            </div>
            <button type="submit" className="btn btn btn-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);

// Login.propTypes = {
//   prop: PropTypes,
// };

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default Login;
