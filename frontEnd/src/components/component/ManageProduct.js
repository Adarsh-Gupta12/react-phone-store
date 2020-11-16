import React, {Component} from 'react'
import axios from "axios"

const deleteProduct = (productId, userId, token) => {
  return fetch(`http://localhost:5000/api/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export default class ManageProduct extends Component{
    render(){
        return(
            <div>
                {this.deleteProduct}
            </div>
        );

    }
}
