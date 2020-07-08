import React, { useEffect, useState } from 'react';

function TopTrending() {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((response) => setTrendings(response));
  }, []);
  return (
    <div>
      <h1>Top Trending</h1>
    </div>
  );
}

export default TopTrending;
