import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Signup.css';
import { attemptSignup } from '../../actions/actions';
import loading from '../../pictures/loading.gif';
import { Link, Redirect } from 'react-router-dom';

function Signup({ signup, userState }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [telephone, setTelephone] = useState('');
  if (userState.redirectTo) {
    return <Redirect to={userState.redirectTo} />;
  }
  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username,
      email,
      password,
      passwordConfirmation,
      telephone,
    };
    signup(user);
  }

  return (
    <div className="signup-div" data-testid="signup-div">
      <div className="register-form">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="note">
            {userState.isSigning ? (
              <p>Création de votre compte...</p>
            ) : (
              <p>Créez un nouveau compte</p>
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
                    name="pseudo"
                    className="form-control username"
                    placeholder="Pseudo *"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control email"
                    name="email"
                    placeholder="Email *"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control password"
                    placeholder="Mot de passe *"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password-confirmation"
                    className="form-control password-confirmation"
                    placeholder="Confirmation du mot de passe *"
                    required
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    value={passwordConfirmation}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="telephone"
                    className="form-control telephone"
                    placeholder="Téléphone *"
                    pattern="[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
                    required
                    onChange={(e) => setTelephone(e.target.value)}
                    value={telephone}
                  />
                  <small>Format: 77 123 56 78</small>
                </div>
              </div>
            </div>
            <button type="submit" className="btnSubmit">
              Créer Compte
            </button>
            <p>
              Ou
              <Link to="/login">Vous Connecter </Link>
            </p>
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
