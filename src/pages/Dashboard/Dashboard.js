import React from 'react';
import DashboardNav from './DashboardNav/DashboardNav';

function Dashboard({ user }) {
  const { username, email } = user;

  return (
    <>
      <DashboardNav />
      Welcome {username}
    </>
  );
}

export default Dashboard;
