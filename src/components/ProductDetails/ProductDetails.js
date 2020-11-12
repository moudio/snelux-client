import React from 'react';
import './ProductDetails.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import loading from '../../pictures/loading.gif';
import { addToCart } from '../../actions/actions';

function ProductDetails({ userState, productsState, handleAddToCart }) {
  const { products } = productsState;
  const { name } = useParams();
  if (!products) {
    return <img className="loading-product-view" src={loading} alt="" />;
  }

  let product = products.find((product) => product.name === name);

  const { description, price, picture, id } = product;

  const handleAddToCartFunc = (e) => {
    const cart = {
      product_id: id,
      user_id: 1,
    };
    console.log('cart is ', cart);
    handleAddToCart(cart);
  };
  return (
    <div className="container">
      <h1>
        Details for <span className="product-name">{product.name}</span>
      </h1>
      <div className="product-image-and-content">
        <div className="product-content">
          <p className="product-description">{description}</p>
          <p className="product-price">{price}</p>
          <button
            className="add-to-cart-button btn btn-lg btn-info"
            onClick={(e) => handleAddToCartFunc(e)}
          >
            Add To Cart
          </button>
          <button className="buy-button btn btn-lg btn-warning">Buy Now</button>
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
  handleAddToCart: (cart) => dispatch(addToCart(cart)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
