import React from 'react';
import Category from '../Category/Category';
import './Categories.css';

function Categories() {
  return (
    <div className="categories" data-testid="categories">
      <h2>Categories</h2>
      <div className="categories-cards">
        <Category category="cars" />
        <Category category="smartphones" />
        <Category category="ordinateurs" />
        <Category category="clothes" />
      </div>
    </div>
  );
}

export default Categories;
