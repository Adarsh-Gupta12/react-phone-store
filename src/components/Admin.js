import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Admin extends Component {
    constructor(props){
        super(props)
        const  token = localStorage.getItem("token")

        let loggedIn = true
        if(token != "abd"){
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }
    
    render() {
       if(this.state.loggedIn === false){
            return <Redirect to="/login" />
        }
        return (
            <div>
                <h1>Admin page</h1>
                <Link to='/login'>
                    Logout
                </Link>
            </div>
        )
    }
}
