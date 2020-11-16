import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './App.css';
import { fetchProducts } from './actions/actions';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import NewProduct from './pages/NewProduct/NewProduct';
import Footer from './components/Footer/Footer';
import ShowCategories from './pages/ShowCategories/ShowCategories';
import Profil from './pages/Profil/Profil';
import AllUsers from './pages/AllUsers/AllUsers';
import AllProductsAdmin from './pages/AllProductsAdmin/AllProductsAdmin';

function App({ userState, productsState, getProducts }) {
  console.log(userState);
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    getProducts();
    axios
      .get('http://localhost:3001/api/products')
      .then((response) => {
        return response;
      })
      .then((response) => {
        setTrendings(response.data);
      });
  }, []);

  return (
    <div className="App" data-testid="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Welcome trendings={trendings} />
          </Route>
          <Route exact path="/products" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/dashboard">
            {userState.access ? (
              <Dashboard user={userState.user} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          {userState.user?.admin && (
            <Route path="/all-users">
              <AllUsers />
            </Route>
          )}
          {userState.user?.admin && (
            <Route path="/all-products">
              <AllProductsAdmin />
            </Route>
          )}
          {userState.access && (
            <Route path="/:username/profil">
              <Profil />
            </Route>
          )}
          <Route exact path="/create-product">
            {/* {userState.access ? <NewProduct /> : <Redirect to="/login" />} */}
            <NewProduct />
          </Route>

          <Route path="/product/:name">
            <ProductDetails />
          </Route>
          <Route path="/categories/:category">
            <ShowCategories />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userReducer,
  productsState: state.productsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
