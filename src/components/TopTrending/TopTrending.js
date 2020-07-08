import React, { useEffect, useState } from 'react';
import Loading from '../../pictures/loading.gif';

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
        {trendings.map((trending) => (
          <>
            <h1>{trending.name}</h1>
            <p>Price: {trending.price}</p>
          </>
        ))}
      </>
    );
  }
}

export default TopTrending;
