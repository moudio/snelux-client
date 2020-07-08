import React from 'react';
import './Welcome.css';
import TopTrending from '../../components/TopTrending/TopTrending';
import { Link } from 'react-router-dom';
function Welcome() {
  return (
    <div>
      <header className="welcome-header">
        <div className="welcome-header-content">
          <h1>The Place To Be For Luxury</h1>
          <p>Get The Finest Products at The Finest Price</p>
          <Link className="welcome-header-shop-now">Shop Now</Link>
        </div>
      </header>
      <TopTrending />
    </div>
  );
}

export default Welcome;
