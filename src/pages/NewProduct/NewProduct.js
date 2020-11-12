import React from 'react';
import { useState } from 'react';

function NewProduct() {
  const [name, setProductName] = useState('');
  const [price, setProductPrice] = useState(0);
  const [description, setProductDescription] = useState('');
  const [category, setProductCategory] = useState('');
  const formSubmitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="create-product">
      <h1>Create A New Product</h1>
      <form className="create-product-form">
        {' '}
        <label htmlFor="productName">Product Name</label> <br />
        <input type="text" className="product-name" /> <br />
        <label htmlFor="productPrice">Price</label> <br />
        <input type="number" name="productPrice" id="productPrice" /> <br />
        <label htmlFor="productDescription">Description</label> <br />
        <textarea
          name="description"
          id="productDescription"
          cols="30"
          rows="10"
        ></textarea>{' '}
        <br />
        <select name="category" id="productCategory">
          <option value="t-shrit">T-shirt</option>
          <option value="shoes">Shoes</option>
          <option value="cellphones">Cellphone</option>
          <option value="clothing">Clothes</option>
        </select>{' '}
        <br />
        <label htmlFor="productPicture">Image</label> <br />
        <fieldset>
          <input type="file" name="picture" id="productPicture" />
        </fieldset>
        <button type="submit" onClick={formSubmitHandle}>
          Create Product
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
