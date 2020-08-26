import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

function Products() {
  const [allProducts, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/products').then((response) => {
      const { data } = response;
      setProducts(data);
    });
  }, []);
  return (
    <div className="products" data-testid="all-products-div">
      <h1>{allProducts ? 'All products' : 'Fetching Products...'}</h1>
      <div className="products">
        <input type="search" name="search-product" id="searchProduct" />
        <div className="products-content">
          {allProducts.map((product, index) => {
            console.log('inside all products');
            return <Product product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
