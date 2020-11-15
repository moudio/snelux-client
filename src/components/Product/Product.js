import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {
  const { name, description, price, picture } = props.product;
  return (
    <div className="row product">
      <div>
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Low KMS</span>
            <span className="card-notify-year">2020</span>
            <img className="img-fluid" src={picture.url} alt={name} />
          </div>
          <div className="card-image-overlay m-auto">
            <span className="card-detail-badge">${price}</span>
          </div>
          <div className="card-body text-center">
            <div className="ad-title m-auto">
              <h5>{name}</h5>
            </div>
            <Link className="view-product-btn" to={`/product/${name}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
