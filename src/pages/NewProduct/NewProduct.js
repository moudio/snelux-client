import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createProduct, fetchProducts } from '../../actions/actions';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import { useHistory } from 'react-router';

function NewProduct({ productsState, handleCreateProduct, userState }) {
  const history = useHistory();
  console.log(userState);
  productsState.productCreated && history.replace('/products');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPicture, setPicture] = useState(null);
  const formSubmitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('category', productCategory);
    formData.append('picture', productPicture);
    formData.append('price', productPrice);
    formData.append('user_id', userState.user.id);
    handleCreateProduct(formData);
  };

  const onImageChange = (e) => {
    setPicture(e.target.files[0]);
  };
  return (
    <div className="create-product">
      <h1>Create A New Product</h1>
      <form className="create-product-form">
        {' '}
        <label htmlFor="productName">Product Name</label> <br />
        <input
          type="text"
          className="product-name"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />{' '}
        <br />
        <label htmlFor="productPrice">Price</label> <br />
        <input
          type="number"
          name="productPrice"
          id="productPrice"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />{' '}
        <br />
        <label htmlFor="productDescription">Description</label> <br />
        <textarea
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          name="description"
          id="productDescription"
          cols="30"
          rows="10"
        ></textarea>{' '}
        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={onImageChange}
        />
        <br />
        <select
          name="category"
          id="productCategory"
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value="clothes">Clothes</option>
          <option value="smartphones">Smartphone</option>
          <option value="ordinateurs">Ordinateur</option>
          <option value="furniture">Furniture</option>
          <option value="voitures">Voitures</option>
        </select>{' '}
        <br />
        <label htmlFor="productPicture">Image</label> <br />
        <button type="submit" onClick={formSubmitHandle}>
          Create Product
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productsState: state.productsReducer,
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  handleCreateProduct: (data) => dispatch(createProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
