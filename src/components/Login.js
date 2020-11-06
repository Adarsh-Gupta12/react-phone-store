import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {
  constructor(props){
    super(props);
    let loggedIn=false
    this.state = {
      username: '',
      password: '',
      loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e){
    e.preventDefault()
    const { username , password } = this.state

    if(username === "admin" && password === "12345"){
      localStorage.setItem("token", "abd")
    this.setState({
      loggedIn: true
    })
  }
  else{
    this.setState({
      username:'',
      password:''
    })
  }
}

  render() {
    if(this.state.loggedIn){
      return <Redirect to= '/admin' />
    }
    return (
      <div>
        <h3>Login</h3>

        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="username" required name="username" value={this.state.username} onChange={this.onChange} />
          <br />
           <input type="password" placeholder="password" required name="password" value={this.state.password} onChange={this.onChange} />
           <br />
           <input type="submit" />
          </form>        
      </div>
    )
  }
}
