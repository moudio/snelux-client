import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import TopTrending from '../../components/TopTrending/TopTrending';
import Categories from '../../components/Categories/Categories';

function Welcome({ trendings }) {
  return (
    <div>
      <header data-testid="header" className="welcome-header">
        <div className="welcome-header-content">
          <h1>The Place To Be For Luxury</h1>
          <p>Get The Finest Products at The Finest Price</p>
          <Link to="/" className="welcome-header-shop-now">
            Shop Now
          </Link>
        </div>
      </header>
      <TopTrending trendings={trendings} />
      <Categories />
    </div>
  );
}

export default Welcome;
