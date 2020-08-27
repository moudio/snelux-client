import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import './Products.css';

function Products() {
  const [allProducts, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/products').then((response) => {
      const { data } = response;
      setProducts(data);
    });
  }, []);

  function handleSearch() {
    let value = document.querySelector('input[type="search"]').value;
    const copyProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilter(copyProducts);
  }
  return (
    <div className="products" data-testid="all-products-div">
      <h1>{allProducts ? 'All products' : 'Fetching Products...'}</h1>
      <div className="products">
        <input
          type="search"
          name="search-product"
          id="searchProduct"
          onChange={(e) => handleSearch(e)}
        />
        <div className="products-content">
          {filter.length
            ? filter.map((product, index) => {
                return <Product product={product} key={index} />;
              })
            : allProducts.map((product, index) => {
                return <Product product={product} key={index} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Products;
