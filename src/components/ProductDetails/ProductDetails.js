import React from 'react';
import './ProductDetails.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import loading from '../../pictures/loading.gif';

function ProductDetails({ userState, productsState }) {
  const { products } = productsState;
  const { name } = useParams();
  if (products) {
    let product = products.find((product) => product.name === name);

    return (
      <div className="container">
        <h1>Details for {product.name}</h1>
      </div>
    );
  } else {
    return <img className="loading-product-view" src={loading} alt="" />;
  }
}
const mapStateToProps = (state) => ({
  userState: state.userReducer,
  productsState: state.productsReducer,
});
export default connect(mapStateToProps, null)(ProductDetails);
