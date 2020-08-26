import React from 'react';

function Product(props) {
  const { name, description, price, picture } = props.product;
  return (
    <div className="product">
      <img src={picture.url} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Product;
