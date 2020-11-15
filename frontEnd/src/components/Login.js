import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';

export default class Login extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      email: '',
      password: '',
      redirect:false
    }

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
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
      email:this.state.email,
      password:this.state.password
    }
    
    if(this.state.email === "user2@gmail.com" && this.state.password === "user2password"){
      console.log('logged in');
      this.setState({ redirect: true })
    }

  axios.post("http://localhost:5000/api/signin", user).then((res) => console.log(res.data));

}

  render() {
   
    return (
      <div>
        <Link to='/'>Back to home</Link>
        
        <h3>Login</h3>
        { this.state.redirect ? (<Redirect push to="/admin"/>) : null }
        <form onSubmit={this.submitForm}>
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
