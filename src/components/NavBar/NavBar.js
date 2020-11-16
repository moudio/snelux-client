import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/actions';
import './NavBar.css';

const NavBar = ({ userState, handleLogout }) => {
  const { user } = userState;
  return (
    <nav className="NavBar" data-testid="navigation">
      <ul className="left-nav">
        <li>
          {' '}
          <Link to="/" data-testid="home">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/products" data-testid="products-nav-link">
            Produits
          </Link>
        </li>
        {!userState.access ? (
          <li>
            <Link to="/login" data-testid="login">
              Connexion
            </Link>
          </li>
        ) : (
          ''
        )}
        {user?.admin && (
          <li>
            <Link to="all-products">Gérer produits</Link>
          </li>
        )}
      </ul>
      <ul className="center-nav">
        <li>
          <Link to="/" className="home-logo">
            Dakar Lux
          </Link>
        </li>
      </ul>
      <ul className="right-nav">
        {!userState.access ? (
          <li>
            <Link to="/signup" data-testid="signup">
              Créer Compte
            </Link>
          </li>
        ) : (
          ''
        )}
        {user?.admin && (
          <li>
            <Link to="/all-users">Utilisateurs</Link>
          </li>
        )}
        {userState.access ? (
          <li>
            <Link to="/dashboard">Espace Personnel</Link>
          </li>
        ) : (
          ''
        )}

        {userState.access ? (
          <>
            <li>
              <Link to={`/${user.username}/profil`}>Profil</Link>
            </li>

            <li>
              <Link to="/create-product" className="sell-product">
                Vendre
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={handleLogout}>
                Déconnexion
              </Link>
            </li>
          </>
        ) : (
          ''
        )}
      </ul>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  userState: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
