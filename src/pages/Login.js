import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => (
  <>
    <h1>Login to your account</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);

Login.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Login;
