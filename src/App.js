import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Welcome from './pages/Wecome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
