import React, { useEffect, useState } from 'react';
import Loading from '../../pictures/loading.gif';
import StanSmith from '../../pictures/stan_smith.jpg';
import './TopTrending.css';

function TopTrending() {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())

      .then((response) => {
        setTimeout(() => {
          setTrendings(response);
        }, 2000);
      });
  }, []);
  if (trendings.length <= 0) {
    return (
      <div>
        <h1>Fetching trending products</h1>
        <img src={Loading} alt="loading trending products" />
      </div>
    );
  } else {
    return (
      <>
        <h1> We have trending products</h1>
        <div className="trending-products">
          {trendings.map((trending, index) => (
            <div className="trending">
              <img src={StanSmith} alt="Stan Smith" />
              <h1>{trending.name}</h1>
              <p>Price: {trending.price}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default TopTrending;
