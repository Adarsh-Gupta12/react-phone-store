import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
//import { isAuthenticated } from "../Login";

const AddProduct = () => {
  const { token , user } = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    
    photo: "",
    
   
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    
    loading,
    error,
    createdProduct,
    getaRedirect,
  } = values;

  const isAuthenticated = () =>{
        const  user = {
      email:"user2@gmail.com",
      password: "user2password"
    }
    axios.post("http://localhost:5000/api/signin", user).then((res) => {return res.data});
    
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createaProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          photo: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} created Succesfully</h4>
    </div>
  );

  //TODO: Make error message function as well for error message popup

  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label >
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      

      <button
        type="submit"
        onClick={onSubmit}
      >
        Create Product
      </button>
    </form>
  );



  return (
    <div>
      <Link to="/admin" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
     
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
         { createProductForm()}
        </div>
      </div>
</div>
  );
};

export default AddProduct;