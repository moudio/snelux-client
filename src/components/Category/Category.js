import React from 'react';
import './Category.css';
import Car from '../../pictures/car.jpg';

function Category({ category }) {
  return (
    <div className={`category ${category}`}>
      <h3>{category}</h3>
    </div>
  );
}

export default Category;
