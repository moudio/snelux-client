import React from 'react';
import { connect } from 'react-redux';
import './Profil.css';

function Profil({ userState }) {
  const { user } = userState;
  const { username, email, telephone } = user;
  return (
    <div className="user-profile">
      <h2>Votre Profil</h2>
      <p>Pseudo: {username}</p>
      <p>Email: {email}</p>
      <p>Telephone: {telephone}</p>
      <button>Modifier profil</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

export default connect(mapStateToProps)(Profil);
