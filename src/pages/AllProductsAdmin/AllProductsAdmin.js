import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
function AllProductsAdmin(props) {
  const [allProduts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/products')
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Tous les produits</h1>
      <div className="all-products-admin">Tous les produits</div>
      <h2>En attente de validation</h2>
    </>
  );
}
const mapStateToProps = (state) => ({
  userState: state.userReducer,
  productState: state.productsReducer,
});
export default connect(mapStateToProps)(AllProductsAdmin);
