import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from "axios"
import { useState,useEffect } from "react"
import deleteProduct from "./component/ManageProduct"
import isAuthenticated from "./component/add-product"

  const Product = (props) => (
  <div>
  
    <h4>{props.product.name}</h4>
    <h4>{props.product.description}</h4>
    <h4><span>$ </span>{props.product.price}</h4>
    <Link to={"/updateProduct/" + props.product._id} className="btn btn-warning">
        Update
      </Link>{" "}
      <a
        className="btn btn-danger"
        href="#"
        onClick={() => {
          props.deleteThisProduct(props.product._id);
        }}
      >
        Delete
      </a>
    </div>
);

export default class Admin extends Component {

constructor(props){
super(props);

    this.deleteThisProduct = this.deleteThisProduct.bind(this);

this.state = {
  products: []
};
}
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => console.log(err));
  }



 deleteThisProduct = (productId) => {

const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    products.then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

     productList() {
    return this.state.products.map((currentproduct) => {
      return (
        <Product
          product={currentproduct}
         deleteThisProduct={this.deleteThisProduct}
          key={currentproduct._id}
        />
      );
    });
  }
    
    render() {
       
        return (
            <div>
                <h1>Admin page</h1>
                <Link to='/signin'>
                    Logout
                </Link>
                <br />
                <Link to='addProduct'>
                    Add product
                </Link>
                {this.productList()}
                
            </div>
        )
    }
}
