import React from 'react';
import Category from '../Category/Category';

function Categories() {
  return (
    <div className="categories" data-testid="categories">
      <h2>Categories</h2>
      <Category category="home" />
      <Category category="jewelry" />
      <Category category="car" />
      <Category category="clothes" />
    </div>
  );
}

export default Categories;
