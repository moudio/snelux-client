import React from 'react';
import Loading from '../../pictures/loading.gif';
import StanSmith from '../../pictures/stan_smith.jpg';
import './TopTrending.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
function TopTrending({ trendings }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  if (trendings.length <= 0) {
    return (
      <div data-testid="fetching-trending-products">
        <h1>Fetching trending products</h1>
        <img src={Loading} alt="loading trending products" />
      </div>
    );
  }
  return (
    <div className="trendings">
      <h1>Notre Sélection </h1>
      <div className="trending-products" data-testid="trending-products">
        <Slider {...settings}>
          {trendings.map((trending, index) => (
            <div className="trending" key={index}>
              <img src={trending.picture.url} alt="Stan Smith" />

              <Link to={`/product/${trending.name}`}>
                <h1>{trending.name}</h1>
              </Link>
              <p>
                Prix:
                {trending.price} Cfa
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default TopTrending;
