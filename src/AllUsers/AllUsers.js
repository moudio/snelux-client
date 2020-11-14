import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actions';
import axios from 'axios';
import './AllUsers.css';
function AllUsers({ userState, fetchUsers }) {
  const { allUsers } = userState;
  console.log(allUsers);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="user">
      <h2>All users</h2>
      {allUsers?.map((user) => (
        <div className="user">
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.telephone}</p>
          <button>Modifier</button>
          <button>Supprimer</button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
