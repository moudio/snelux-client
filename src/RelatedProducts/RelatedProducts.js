import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import './RelatedProducts.css';

function RelatedProducts({ category }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/categories/${category}`)
      .then((res) => setRelatedProducts(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="produits-similaires">
      <h2>Produits Similaires</h2>
      <Slider {...settings}>
        {relatedProducts.map((relatedProduct, index) => (
          <div className="related-product" key={index}>
            <img src={relatedProduct.picture.url} alt="Stan Smith" />

            <Link to={`/product/${relatedProduct.name}`}>
              <h1>{relatedProduct.name}</h1>
            </Link>
            <p>
              Prix:
              {relatedProduct.price}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RelatedProducts;
