import React, { Component } from 'react';
import './App.css';
import "./Praveen.css"
import { BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import Route from "react-router-dom/Route";
import User from './praveen/User';
import About from './praveen/About';
import Home from './praveen/Home';
import Product from './praveen/Product';
import Calculator from './component/Calculator';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul className="navbar-nav mr-auto mt-1mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link " to="/" activeStyle={
                { color: "green" }} activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link " to="/about" activeStyle={
                { color: "blue" }} activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link " to="/user" activeStyle={
                { color: "red" }} activeClassName="active">User</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/product" activeStyle={{ color: "yellow" }} activeClassName="active">Product</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/calculator" activeStyle={{ color: "yellow" }} activeClassName="active">Calculator</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/user">
              <User />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/calculator">
              <Calculator />
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;