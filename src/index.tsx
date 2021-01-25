import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';

ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
