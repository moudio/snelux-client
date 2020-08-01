import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-div">
      <div className="register-form">
        <form className="form">
          <div className="note">
            <p>Create a new account</p>
          </div>

          <div className="form-content">
            <div className="row">
              <div className="col-md-8 form-inputs-container">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password *"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btnSubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
