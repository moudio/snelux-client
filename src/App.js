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
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';

function App({ userState, productsState }) {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
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
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userReducer,
  productsState: state.productsReducer,
});

export default connect(mapStateToProps, null)(App);
