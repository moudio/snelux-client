import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './ShowCategories.css';
import Product from '../../components/Product/Product';

function ShowCategories(props) {
  const { category } = useParams();
  const [productsCategories, setProductsCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/categories/${category}`)
      .then((res) => setProductsCategory(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="products-category">
      <h2>Catégorie {category}</h2>
      <div className="products-category__container">
        {productsCategories.map((product) => (
          <Product product={product} index={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ShowCategories;
