import React from 'react';
import { connect } from 'react-redux';
import './Signup.css';
import { attemptSignup } from '../../actions/actions';
import loading from '../../pictures/loading.gif';

function Signup({ signup, userState }) {
  function handleSubmit(e) {
    e.preventDefault();
    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const passwordConfirmation = document.querySelector(
      '.password-confirmation'
    );
    const signupParams = {
      username,
      email,
      password,
      passwordConfirmation,
    };
    signup(signupParams);
  }
  return (
    <div className="signup-div" data-testid="signup-div">
      <div className="register-form">
        <form className="form">
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
          <div className="form-content">
            <div className="row">
              <div className="col-md-8 form-inputs-container">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control username"
                    placeholder="Username *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control email"
                    name="email"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control password"
                    placeholder="Your Password *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password-confirmation"
                    className="form-control password-confirmation"
                    placeholder="Confirm Password *"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btnSubmit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
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
