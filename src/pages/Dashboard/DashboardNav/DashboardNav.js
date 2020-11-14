import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function DashboardNav({ userState }) {
  const userProductsHandle = () => {};
  return (
    <div className="dashboard-nav">
      <li>
        <a
          to={`/users/${userState.user.username}/produits`}
          onClick={userProductsHandle}
        >
          Vos Produits
        </a>
      </li>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, null)(DashboardNav);
