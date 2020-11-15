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
          <h1>Trouver ce qu'il vous faut</h1>
          <p>Les meilleurs produits aux meilleurs prix</p>
          <Link to="/" className="welcome-header-shop-now">
            Acheter Maintenant
          </Link>
        </div>
      </header>
      <TopTrending trendings={trendings} />
      <Categories />
    </div>
  );
}

export default Welcome;
