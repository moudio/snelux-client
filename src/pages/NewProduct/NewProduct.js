import React from 'react';

function NewProduct() {
  return (
    <div>
      <h1>Create A New Product</h1>
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
    </div>
  );
}

export default NewProduct;
