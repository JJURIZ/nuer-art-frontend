import React, { Component } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utilities/setAuthToken'
import { Redirect } from 'react-router-dom'
const backendUrl = process.env.REACT_APP_SERVER_URL

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleEmail(e){
        this.setState({email: e.target.value})
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }    
        axios.post(`${backendUrl}/users/login`, userData)
        .then(response => {
            const { token } = response.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token)
            const decoded = jwt_decode(token);
            this.props.nowCurrentUser(decoded)
        })
        .catch(error => {
            console.log(error)
        })

        }

    render(){
        if (this.props.user) return <Redirect to="/" />
        return (
            <div className="">
            <h2 className="">Login</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={this.email} onChange={this.handleEmail} className="" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.password} onChange={this.handlePassword} className="" />
                </div>
                <button type="submit" className="">Login</button>
            </form>
        </div>
        )
    }
}

export default Login