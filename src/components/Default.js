import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Default extends Component {
  render() {
    console.log(this.props);
    return (

      <div className="container">
        <div className="row">
          <Link to='./'>Go to Homepage</Link>
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                  
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>the requested URL <span className="text-danger">{this.props.location.pathname}</span>{" "} was not found</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
