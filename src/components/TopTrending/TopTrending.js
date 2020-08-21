import React from 'react';
import Loading from '../../pictures/loading.gif';
import StanSmith from '../../pictures/stan_smith.jpg';
import './TopTrending.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function TopTrending({ trendings }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
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
      <h1> Trending products</h1>
      <div className="trending-products" data-testid="trending-products">
        <Slider {...settings}>
          {trendings.map((trending) => (
            <div className="trending">
              <img src={trending.picture.url} alt="Stan Smith" />

              <h1>{trending.name}</h1>
              <p>
                Price:
                {trending.price}
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
