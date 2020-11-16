import React, { useEffect, useState } from 'react';
import DashboardNav from './DashboardNav/DashboardNav';
import axios from 'axios';
import Product from '../../components/Product/Product';
import './Dashboard.css';

function Dashboard({ user }) {
  const { username, email, id } = user;
  const [userProducts, setUserProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}/products`)
      .then((res) => setUserProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <DashboardNav />
      Bienvienue {username}
      <div className="user-products">
        {userProducts.map((userProduct) => (
          <Product product={userProduct} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
