import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createProduct, fetchProducts } from '../../actions/actions';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

function NewProduct({ handleCreateProduct }) {
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
        {/* <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={onImageChange}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          singleImage={true}
        /> */}
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
          <option value="t-shrit">T-shirt</option>
          <option value="shoes">Shoes</option>
          <option value="cellphones">Cellphone</option>
          <option value="clothing">Clothes</option>
        </select>{' '}
        <br />
        <label htmlFor="productPicture">Image</label> <br />
        {/* <fieldset>
          <input
            type="file"
            accept="image/*"
            multiple={false}
            onChange={onImageChange}
            name="picture"
            id="productPicture"
          />
        </fieldset> */}
        <button type="submit" onClick={formSubmitHandle}>
          Create Product
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleCreateProduct: (data) => dispatch(createProduct(data)),
});

export default connect(null, mapDispatchToProps)(NewProduct);
