import React, { useEffect, useState } from 'react';

function TopTrending() {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((response) => setTrendings(response));
  }, []);
  if (trendings.length <= 0) {
    return (
      <div>
        <h1>Top Trending</h1>
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
