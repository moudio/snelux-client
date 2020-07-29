import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div>
      <div id="login-overlay" class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">
              Login to <b>YaelsEverythingStore.com</b>
            </h4>{' '}
            or go back to our <a href="./index.jsp">main site</a>.
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-xs-6">
                <div class="well">
                  <form id="loginForm" method="POST">
                    <div class="form-group">
                      <label for="username" class="control-label">
                        Username
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        value=""
                        required=""
                        title="Please enter your username"
                        placeholder="username"
                      />
                      <span class="help-block"></span>
                    </div>
                    <div class="form-group">
                      <label for="password" class="control-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        placeholder="password"
                        value=""
                        required=""
                        title="Please enter your password"
                      />
                      <span class="help-block"></span>
                    </div>
                    <div id="loginErrorMsg" class="alert alert-error hide">
                      Wrong username or password
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" name="remember" id="remember" />{' '}
                        Remember login
                      </label>
                      <p class="help-block">(if this is a private computer)</p>
                    </div>
                    <button
                      type="submit"
                      value="login"
                      name="submit"
                      class="btn btn-success btn-block"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-xs-6">
                <p class="lead">
                  Register now for <span class="text-success">FREE</span>
                </p>
                <ul class="list-unstyled">
                  <li>
                    <span class="fa fa-check text-success"></span> See all your
                    orders
                  </li>
                  <li>
                    <span class="fa fa-check text-success"></span> Shipping is
                    always free
                  </li>
                  <li>
                    <span class="fa fa-check text-success"></span> Save your
                    favorites
                  </li>
                  <li>
                    <span class="fa fa-check text-success"></span> Fast checkout
                  </li>
                  <li>
                    <span class="fa fa-check text-success"></span> Get a gift{' '}
                    <small>(only new customers)</small>
                  </li>
                  <li>
                    <span class="fa fa-check text-success"></span>Holiday
                    discounts up to 30% off
                  </li>
                </ul>
                <p>
                  <a href="./Register.jsp" class="btn btn-info btn-block">
                    Yes please, register now!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
