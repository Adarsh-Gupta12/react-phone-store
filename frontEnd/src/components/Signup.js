import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';

export default class Login extends Component {
  constructor(props){
    super(props);
  
    this.state = {
        name:'',
      email: '',
      password: ''
    }

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChangeName(e){
    this.setState({
      name: e.target.value
    });
  }
  
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  
  onChangePassword(e){
    this.setState({
      password: e.target.value
    });
  }
  
  submitForm(e){
    e.preventDefault()
    const  user = {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
    }
    
  axios.post("http://localhost:5000/api/signup", user).then((res) => console.log(res.data));


}

  render() {
   
    return (
      <div>
        
        <h3>Sign up</h3>

        <form onSubmit={this.submitForm}>
            <input type="text" placeholder="Name" required name="name" value={this.state.name} onChange={this.onChangeName} />
          <br />
          <input type="email" placeholder="email" required name="email" value={this.state.email} onChange={this.onChangeEmail} />
          <br />
           <input type="password" placeholder="password" required name="password" value={this.state.password} onChange={this.onChangePassword} />
           <br />
           <input type="submit" />
          </form>        
      </div>
    )
  }
}
