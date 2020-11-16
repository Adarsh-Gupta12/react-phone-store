import React, { Component } from 'react';
import {Switch,Router, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import ProductList from './components/ProductList';
import Modal from './components/Modal'
import Admin from './components/Admin'
import AddProduct from './components/component/add-product'
import UpdateProduct from './components/component/update-product'


class App extends Component {
  render()  {
      return (
      <React.Fragment>
 
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart} />
          <Route path="/signin" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/updateProduct" component={UpdateProduct} />
          <Route component={Default}/>
        </Switch>
        <Modal />
      </React.Fragment>
      );
    }
}

export default App;
