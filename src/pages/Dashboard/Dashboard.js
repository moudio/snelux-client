import React from 'react';

function Dashboard({ user }) {
  const { username, email } = user;
  return <div>Welcome {username}</div>;
}

export default Dashboard;
