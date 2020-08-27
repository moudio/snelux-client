import React from 'react';
import './Product.css';

function Product(props) {
  const { name, description, price, picture } = props.product;
  return (
    <div className="row product">
      <div>
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Low KMS</span>
            <span className="card-notify-year">2018</span>
            <img className="img-fluid" src={picture.url} alt={name} />
          </div>
          <div className="card-image-overlay m-auto">
            <span className="card-detail-badge">${price}</span>
          </div>
          <div className="card-body text-center">
            <div className="ad-title m-auto">
              <h5>{name}</h5>
            </div>
            <a className="view-product-btn" href="#">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
