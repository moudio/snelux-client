import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { attemptLogin } from '../../actions/actions';
import FormBackground from '../../pictures/form_background.jpeg';
import { connect } from 'react-redux';

export const Login = () => (
  <div className="login-div-parent">
    <h1 className="login-account-title">Login to your account</h1>
    <div className="form-and-background-container container">
      <div className="row">
        <div className="col-md-8 inner-form-container">
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
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

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  tryLogin: (user) => dispatch(attemptLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
