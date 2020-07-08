import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
function Welcome() {
  return (
    <div>
      <header className="welcome-header">
        <h1>Welcome to Snelux</h1>
        <p>The place to be for luxury products</p>
        <Link className="welcome-header-shop-now">Shop Now</Link>
      </header>
    </div>
  );
}

export default Welcome;
