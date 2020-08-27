import React from 'react';
import './ProductDetails.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetails(userState) {
  const { name } = useParams();
  let product = userState.products.find((product) => (product.name = name));
  console.log(product);
  return <div className="product-details">Details for Product</div>;
}

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});
export default connect(mapStateToProps, null)(ProductDetails);
