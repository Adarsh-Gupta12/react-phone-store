import React, { Component } from 'react';
import {Switch,Router, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavaBar";
import Productlist from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import ProductList from './components/ProductList';
import Modal from './components/Modal'

class App extends Component {
  render()  {
      return (
      <React.Fragment>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart} />
          <Route component={Default}/>
        </Switch>
        <Modal />
      </React.Fragment>
      );
    }
}

export default App;
