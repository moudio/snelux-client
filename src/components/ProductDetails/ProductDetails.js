import React from 'react';
import './ProductDetails.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import loading from '../../pictures/loading.gif';
import { addToCart } from '../../actions/actions';

function ProductDetails({ userState, productsState }) {
  const { products } = productsState;
  const { name } = useParams();
  if (!products) {
    return <img className="loading-product-view" src={loading} alt="" />;
  }

  let product = products.find((product) => product.name === name);

  const { description, price, picture, id, user } = product;

  return (
    <div className="container">
      <h1>
        Details for <span className="product-name">{product.name}</span>
      </h1>
      <div className="product-image-and-content">
        <div className="product-content">
          <p className="product-description">{description}</p>
          <p className="product-price">{price}</p>

          <div className="user_infos">
            <p>Par: {user.username}</p>
            <p>Appeler: {user.telephone}</p>
          </div>
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
