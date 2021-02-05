import React, { Component } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utilities/setAuthToken'
import { Link } from 'react-router-dom'
import { withAlert } from 'react-alert'
import { Redirect } from 'react-router-dom'

import './Home.scss'
const backendUrl = process.env.REACT_APP_SERVER_URL

class Home extends Component {
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
        const { alert } = this.props
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
            alert.show("Wrong email address or password")
            console.log(error)
        })

        }

    render(){
        if (this.props.user) return <Redirect to="/gallery" />
        return (
            <div className="Login">
                <h2 className="Login-header">I Have An Account</h2>
                <form onSubmit={this.handleSubmit} className="Login-form">
            
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={this.email} onChange={this.handleEmail} className="form-control" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.password} onChange={this.handlePassword} className="form-control" />
        
                    <button type="submit" className="Form-button">Login</button>
                </form>
                {/* <h2>Or</h2> */}
                <div className="Signup-link">
                    <Link to="/signup"><span className="Signup-link-text">I Want An Account</span></Link>
                </div>

            </div>
        )
    }
}

export default withAlert()(Home)
