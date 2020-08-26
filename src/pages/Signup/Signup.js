import React from 'react';
import { connect } from 'react-redux';
import './Signup.css';
import { attemptSignup } from '../../actions/actions';
import loading from '../../pictures/loading.gif';
import { Link } from 'react-router-dom';

function Signup({ signup, userState }) {
  function handleSubmit(e) {
    e.preventDefault();
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const password_confirmation = document.querySelector(
      '.password-confirmation'
    ).value;
    const user = {
      username,
      email,
      password,
      password_confirmation,
    };
    signup(user);
  }
  return (
    <div className="signup-div" data-testid="signup-div">
      <div className="register-form">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="note">
            {userState.isSigning ? (
              <p>Creating your account...</p>
            ) : (
              <p>Create a new account</p>
            )}
          </div>
          {userState.isSigning ? (
            <div className="signup-animation-div">
              <img
                src={loading}
                alt="loading"
                className="loading-signup-animation"
              />
            </div>
          ) : (
            ''
          )}
          {userState.signupErrors ? (
            <ul className="signup-errors">
              {userState.signupErrors.map((error, index) => (
                <li className="signup-error" key={index}>
                  {error}
                </li>
              ))}
            </ul>
          ) : (
            ''
          )}
          <div className="form-content">
            <div className="row">
              <div className="col-md-8 form-inputs-container">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control username"
                    placeholder="Username *"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control email"
                    name="email"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control password"
                    placeholder="Your Password *"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password-confirmation"
                    className="form-control password-confirmation"
                    placeholder="Confirm Password *"
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btnSubmit">
              Create Account
            </button>
            <p>Or {<Link to="/login">login to your account</Link>}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (signupParams) => dispatch(attemptSignup(signupParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
