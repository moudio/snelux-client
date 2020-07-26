import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login';
import './App.css';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
