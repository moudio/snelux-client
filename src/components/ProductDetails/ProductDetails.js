import React from 'react';
import './ProductDetails.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import loading from '../../pictures/loading.gif';

function ProductDetails({ userState, productsState, handleAddToCart }) {
  const { products } = productsState;
  const { name } = useParams();
  if (!products) {
    return <img className="loading-product-view" src={loading} alt="" />;
  }

  let product = products.find((product) => product.name === name);

  const { description, price, picture } = product;
  return (
    <div className="container">
      <h1>Details for {product.name}</h1>
      <div className="product-image-and-content">
        <div className="product-content">
          <p>{description}</p>
          <p>{price}</p>
          <button className="add-to-cart-button btn btn-lg btn-info">
            Add To Cart
          </button>
          <button
            className="buy-button btn btn-lg btn-warning"
            onclick={handleAddToCart}
          >
            Buy Now
          </button>
        </div>
        <div className="product-image">
          <img src={picture.url} alt="" />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  userState: state.userReducer,
  productsState: state.productsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  // handleAddToCart: () => {
  //   dispatch(addToCart());
  // },
});
export default connect(mapStateToProps, null)(ProductDetails);
