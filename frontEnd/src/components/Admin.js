import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from "axios"

  const Product = (props) => (
  <tr>
    <td>{props.product.name}</td>
    <td>{props.product.description}</td>
    
  </tr>
);

export default class Admin extends Component {



  componentDidMount() {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        this.setState({ drives: res.data });
      })
      .catch((err) => console.log(err));
  }

deleteProduct(id) {
    axios.delete("/http://localhost:5000/api/product/:productId/" + id).then((res) => console.log(res.data));
    this.setState({
      drives: this.state.drives.filter((e) => e._id !== id),
    });
  }

     productList() {
    return this.state.products.map((currentproduct) => {
      return (
        <Product
          product={currentproduct}
          deleteDrive={this.deleteProduct}
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
            </div>
        )
    }
}
